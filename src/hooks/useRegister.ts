import { AuthRegisterInterface } from "@/interfaces/authRegister";
import React ,{ useState } from "react";

export default function useRegister() {
  // Estado local del registro
  const [register, setRegister] = useState<AuthRegisterInterface>({
    name: "",
    username: "",
    email: "",
    phoneNumber: 0,
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // VALIDACIONES ANTES DE ENVIARLOS AL BACK:
  const isEqualPassword = register.password === confirmPassword;




  
  // Recolección de los valores de cada campo del registro
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  return { register, isEqualPassword, handleChange, setConfirmPassword };
}
