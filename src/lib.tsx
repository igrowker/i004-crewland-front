'use server'

import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export const userLogin = async (
  email: string,
  password: string,
  userAgent?: string
) => {
  const existedCookies = await cookies()
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/auth/login`,
      {
        email,
        password
      },
      {
        headers: {
          'user-agent': userAgent,
          'Content-Type': 'application/json'
        }
      }
    )
    if (response.statusText === 'OK' || response.status == 200) {
      const data = response.data.data.data
      const session = {
        token: data.token,
        id: data.userData.id,
        name: data.userData.name,
        username: data.userData.username
      }
      existedCookies.set('session', JSON.stringify(session))
      console.log(response.data.data.data)
      return {
        status: response.status,
        data: response.data,
        token: response.data.data.data.token
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status
      return {
        status: statusCode,
        statusText: error.response?.statusText,
        data:
          statusCode === 409
            ? error.response?.data.message
            : error.response?.data.message.message
      }
    }
  }
}

export type SessionType = {
  token: string
  id: string
  name: string
  username: string
}

export async function getSession(): Promise<SessionType> {
  const existedCookies = await cookies()
  const token = existedCookies.get('session')?.value

  if (!token)
    return {
      token: 'unknown',
      id: 'unknown',
      name: 'unknown',
      username: 'unknown'
    }

  try {
    return JSON.parse(token)
  } catch (error) {
    console.error(error)
    return {
      token: 'unknown',
      id: 'unknown',
      name: 'unknown',
      username: 'unknown'
    }
  }
}

export async function updateSession(req: NextRequest) {
  const existedCookies = await cookies()
  const session = await getSession()
  const url = req.url
  const { pathname } = req.nextUrl

  if (!pathname.includes('.') === true) {
    const publicPaths = new Set(['/auth/login', '/auth/register', '/home', '/'])
    if (pathname === '/logout') {
      existedCookies.delete('session')
      return NextResponse.redirect(new URL('/', url))
    }

    if (!session && !publicPaths.has(pathname)) {
      existedCookies.delete('session')
      return NextResponse.redirect(new URL('/', url))
    }
    // } else if (session && publicPaths.includes(pathname)) {
    //   return NextResponse.redirect(new URL("/festivals", url));
    // }
  }
}
