"use server";
import axios from "axios";
export const getFestivals = async (token: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/festivals`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.data;
  } catch (e) {
    console.error(e);
  }
};
