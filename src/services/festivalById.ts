"use server";
import axios from "axios";


export const getFestivalById = async (token: string, festivalId: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/festivals/${festivalId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (e) {
    console.error(e);
  }
};