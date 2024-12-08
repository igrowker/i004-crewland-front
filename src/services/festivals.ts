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
    return {
      data: response.data.data.data
    } 
  } catch (e) {
    console.error(e);
  }
};

export const festivalById = async (token: string, festivalId: string) => {
  try {
    if (festivalId) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/festivals/${festivalId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return {
        data: response.data.data.data
      }
    }
  } catch (e) {
    console.error(e);
  }
};
