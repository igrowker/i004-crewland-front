import server from "@/server.config"
import axios from "axios"

export const register = async (email: string, password: string, name: string, username: string, age: string, tel: string, gender: string, userAgent: string) => {
    try {
        const response = await axios.post(`${server}/users/register`, {
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
                token: response.data.token,
                msg: 'Client registered successfully'
            }
        }
        
    } catch (error) {
        console.error(error)
        return {
            success: false,
            data: {
                token: '',
                msg: 'Client registration failed'
            }
        }
    }
}