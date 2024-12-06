"use server";
import axios from "axios";
import { token } from "@/server.config";
import { publicationInterface } from "@/interfaces/publication";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/publications`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Agrega el token al encabezado
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getPublicationsByFestival = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/publications?festivalId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getUsersForPublications = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/users/for-publications`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export const postPublication = async ( festivalId: string, createPost: publicationInterface ) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/publications/${festivalId}`, createPost,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
