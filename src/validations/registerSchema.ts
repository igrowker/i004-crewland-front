import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Nombre (obligatorio)" }),
  username: z.string().min(1, { message: "Nombre de usuario (obligatorio)" }),
  email: z.string().email({ message: "Correo electrónico tiene un formato inválido" }),
  tel: z.string().min(1, { message: "Número de teléfono (obligatorio)" }),
  age: z.string().min(1, { message: "Fecha de nacimiento (obligatorio)" }),
  gender: z.string().min(1, { message: "Género (obligatorio)" }),
  password: z.string().min(8).max(30).refine((val) => /[A-Z]/.test(val) && /[0-9]/.test(val), {
    message: "Contraseña mínima de 8 caracteres y maximo 30, una mayúscula y un número",
  }),
  confirmPassword: z.string(),
})
.refine((data) => {
  if (data.password !== data.confirmPassword) {
    return false;
  }
  return true;
}, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});