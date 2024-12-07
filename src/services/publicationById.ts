"use server";
import axios from "axios";
import { token } from '@/server.config';


export const getPublicationById = async (publicationId: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/publications/${publicationId}`, {
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