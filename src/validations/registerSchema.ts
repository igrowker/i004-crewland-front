import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  username: z.string().min(1, { message: "El nombre de usuario es obligatorio" }),
  email: z.string().email({ message: "Correo electronico invalido" }),
  phoneNumber: z.string().min(1, { message: "Numero de telefono obligatorio" }),
  password: z.string().min(8).refine((val) => /[A-Z]/.test(val) && /[0-9]/.test(val), {
    message: "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número",
  }),
  confirmPassword: z.string().min(8, {
    message: "La confirmación de la contraseña debe tener al menos 8 caracteres",
  }),
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