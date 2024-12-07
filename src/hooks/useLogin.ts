import { IAuthLogin } from "@/interfaces/authLogin";
import { userLogin } from "@/lib";
import React, { useState } from "react";

export default function useLogin() {
  const [login, setLogin] = useState<IAuthLogin>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const result = await userLogin(login.email, login.password);
      console.log("Result", result);
      if (result?.status !== 200) {
        setErrors({ general: result?.data.message });
      }
      return result;
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ general: "Unexpected error occurred" });
    }
  };

  return {
    login,
    errors,
    handleChange,
    handleSubmit,
  };
}
