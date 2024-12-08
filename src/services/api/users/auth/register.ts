import server from "@/server.config";
import axios from "axios";

export const userRegister = async (
  email: string,
  password: string,
  name: string,
  username: string,
  age: string,
  tel: string,
  gender: string,
  userAgent?: string,
) => {
  try {
    const response = await axios.post(
      // `${process.env.NEXT_PUBLIC_SERVER}/users/register`,
      `${server}/users/register`,
      {
        email,
        password,
        name,
        username,
        age,
        tel,
        gender,
      },
      {
        headers: {
          "user-agent": userAgent,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.statusText === "success" || response.status == 201) {
      return {
        response: {
          status: response.status,
          statusText: response.statusText,
          data: response.data,
        },
        request: response.request.status,
      };
    }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const statusCode = e.response?.status;
      return {
        response: {
          status: statusCode,
          statusText: e.response?.statusText,
          data:
            statusCode === 409
              ? e.response?.data.message
              : e.response?.data.message.message,
        },
        request: e.request.status,
      };
    }
  }
};
