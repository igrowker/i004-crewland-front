"use server";
import axios from "axios";

export const getAllPublications = async (token: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/publications`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    return response.data;

  } catch (error) {
    console.error('Error fetching publications:', error)
  }
};