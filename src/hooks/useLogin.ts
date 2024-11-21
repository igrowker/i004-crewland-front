import { IAuthLogin } from "@/interfaces/authLogin";
import { loginSchema } from "@/validations/loginSchema";
import React, { useState } from "react";

export default function useLogin() {
    const [login, setLogin] = useState<IAuthLogin>({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLogin((prev) => ({ ...prev, [name]: value }))
    }

    const validateLogin = () => { 
        const result = loginSchema.safeParse(login)
        if (result.success) {
            setErrors({})
            return true
        } else {
            const errorMessages: { [key: string]: string } = {}
            result.error.errors.forEach((error) => {
                errorMessages[error.path[0]] = error.message
            })
            setErrors(errorMessages)
            return false
        }
    }

    return {
        login,
        errors,
        handleChange,
        validateLogin
    }
}



