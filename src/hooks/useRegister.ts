import { AuthRegisterInterface } from "@/interfaces/authRegister";
import { registerSchema } from "@/validations/registerSchema";
import React ,{ useState } from "react";

export default function useRegister() {
  // Estado local del registro
  const [register, setRegister] = useState<AuthRegisterInterface>({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
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
       // si las validaciones son exitosas
      console.log(result)
      setErrors({})
      return true

    } else {
      // si las validaciones no son exitosas, mostrar el error a cada input correspondiente
      console.log(result)
      const errosMessages: {[key: string]: string} = {};
      result.error.errors.forEach((error) => {
        errosMessages[error.path[0]] = error.message
      })
      
      setErrors(errosMessages)
      return false
    }
  }


  return { errors, register, ValidateRegister , handleChange, setConfirmPassword };
}
