import axios from "axios"

export const userRegister = async (email: string, password: string, name: string, username: string, age: string, tel: string, gender: string, userAgent?: string) => {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/users/register`, {
            email,
            password,
            name,
            username,
            age,
            tel,
            gender
        }, {
            headers: {
                'user-agent': userAgent,
                'Content-Type': 'application/json'
            }
        })
        return {
            success: true,
            data: {
                msg: 'Client registered successfully'
            }
        }
        
    } catch (error) {
        console.error(error)
        return {
            success: false,
            data: {
                msg: 'Client registration failed'
            }
        }
    }
}