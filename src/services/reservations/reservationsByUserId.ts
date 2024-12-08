'use server';
import axios from 'axios';
export const getReservationsByUserId = async (token: string, userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/reservations/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data
  } catch (error) {
    console.error('Error fetching reservations:', error);
    throw error;
  }
};
