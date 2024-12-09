import axios from 'axios'
import { UserInterface } from '@/interfaces/user'

export const getUserById = async (id: string, token: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data.data
  } catch (e) {
    console.error(`Error al obtener el usuario con ID ${id}:`, e)
  }
}
export const patchUser = async (
  id: string,
  updateData: Partial<UserInterface>,
  token: string
) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER}/users/${id}`,
      updateData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data
  } catch (e) {
    console.error(`Error al actualizar el usuario con ID ${id}:`, e)
  }
}
