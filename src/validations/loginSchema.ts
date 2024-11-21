import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "Correo electronico invalido" }),
    password: z.string().min(8).refine((val) => /[A-Z]/.test(val) && /[0-9]/.test(val), {
        message: "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número",
      })
})



