"use server";
import axios from "axios";
import { ReservationInterface } from "@/interfaces/reservations";

export const postReservation = async ( token: string, createReservation: ReservationInterface ) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/reservations`,
      createReservation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    if (response.statusText === 'success' || response.status == 201) {
      return {
        response: {
          status: response.status,
          statusText: response.statusText,
          data: response.data.data.data
        },
        request: response.request.status
      }
    }
  } catch (e) {
    console.error(e)
    if (axios.isAxiosError(e)) {
      const statusCode = e.response?.status
      return {
        response: {
          status: statusCode,
          statusText: e.response?.statusText,
          data: e.response?.data.message.message
        },
        request: e.request.status
      }
    }
  }
}
