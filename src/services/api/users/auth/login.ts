import server from "@/server.config"
import axios from "axios"

export const login = async (email: string, password: string, userAgent: string) => {
    try {
        const response = await axios.post(`${server}/auth/login`, {
            email,
            password,
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
                msg: 'Client logged in successfully'
            }
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            data: {
                token: '',
                msg: 'Client login failed'
            }
        }
    }
}