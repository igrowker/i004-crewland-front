import { AuthRegisterInterface } from "@/interfaces/authRegister";
import { registerSchema } from "@/validations/registerSchema";
import React ,{ useState } from "react";

export default function useRegister() {
  // Estado local del registro
  const [register, setRegister] = useState<AuthRegisterInterface>({
    name: "",
    username: "",
    email: "",
    tel: "",
    age: "",
    gender: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Recolección de los valores de cada campo del registro
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  // Validaciones del registro antes de enviarlo al servidor
  const ValidateRegister = () => {
    const result = registerSchema.safeParse({...register, confirmPassword})
    if (result.success) {
      setErrors({})
      return true

    } else {
      const errosMessages: {[key: string]: string} = {};
      result.error.errors.forEach((error) => {
        errosMessages[error.path[0]] = error.message
      })
      setErrors(errosMessages)
      return false
    }
  }


  return { errors, register, ValidateRegister , handleChange, setConfirmPassword, setRegister };
}
