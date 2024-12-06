"use server";
import axios from "axios";
import { token } from '@/server.config';


export const getFestivals = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/festivals`, {
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