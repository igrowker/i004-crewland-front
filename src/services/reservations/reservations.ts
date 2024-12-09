'use server';
import axios from 'axios';
export const getAllReservations = async (token: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/reservations/all`,
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
