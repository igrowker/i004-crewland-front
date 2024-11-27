'use server'

import { cookies, headers } from "next/headers";
import api from "./services";
import { NextRequest, NextResponse } from "next/server";

export type FormState = {
    success: boolean;
    data: {
        token: string;
        msg: string;
    };
}

export async function login(
    prevState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    try {
        const existedCookies = await cookies();
        const resolvedHeaders = await headers();
        const userAgents = resolvedHeaders.get('user-agent');
        const users = {
            email: formData.get('email')?.toString(),
            password: formData.get('password')?.toString()
        } 

        if (!users.email){
            return {
                success: false,
                data: {
                    token: '',
                    msg: 'Email is required'
                }
            }
        }

        if (!users.password) {
            return {
                success: false,
                data: {
                    token: '',
                    msg: 'Password are required'
                }
            }
        }

        const response = await api.auth.login(
            users.email,
            users.password,
            userAgents ?? ''
        );

        if (response.success) {
            const token = response.data.token;
            const expires = Date.now() + 1000 * 60 * 60 * 24 * 7;
            existedCookies.set('session', token, {expires, httpOnly: true});
        }

        return response;

    } catch (error) {
        return {
            success: false,
            data: {
                token: '',
                msg: String(error)
            }
        }
    }
}

export async function register(
    prevState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    try {
        const existedCookies = await cookies();
        const resolvedHeaders = await headers();
        const userAgents = resolvedHeaders.get('user-agent');
        const users = {
            email: formData.get('email')?.toString(),
            password: formData.get('password')?.toString(),
            name: formData.get('name')?.toString(),
            username: formData.get('username')?.toString(),
            age: formData.get('age')?.toString(),
            tel: formData.get('tel')?.toString(),
            gender: formData.get('gender')?.toString()
        } 

        if (!users.email){
            return {
                success: false,
                data: {
                    token: '',
                    msg: 'Email is required'
                }
            }
        }

        if (!users.password) {
            return {
                success: false,
                data: {
                    token: '',
                    msg: 'Password are required'
                }
            }
        }

        const response = await api.auth.login(
            users.email,
            users.password,
            userAgents ?? ''
        );

        if (response.success) {
            const token = response.data.token;
            const expires = Date.now() + 1000 * 60 * 60 * 24 * 7;
            existedCookies.set('session', token, {expires, httpOnly: true});
        }

        return response;

    } catch (error) {
        return {
            success: false,
            data: {
                token: '',
                msg: String(error)
            }
        }
    }
}
export type SessionType = {token: string, id?: string} | undefined;

export async function getSession():Promise<SessionType> {
    const existedCookies = await cookies()
    const token = existedCookies.get('session')?.value

    if (!token) return undefined;

    try {
        const decoded = atob(token.split('.')[1]);

        const {id} = JSON.parse(decoded);
        return {token, id};

    } catch (error) {
        console.error(error);
        return undefined;
        
    }
}

export async function updateSession(req: NextRequest) {
    const existedCookies = await cookies();
    const session = await getSession();
    const url = req.url;
    const {pathname} = req.nextUrl

    if (!pathname.split('').includes('.') === true) {
        const publicPaths = ['/auth/login', '/auth/register', '/home', '/'];
        if (pathname === '/logout') {
            existedCookies.delete('session');
            return NextResponse.redirect(new URL('/', url));
        }

        if (!session?.token && !publicPaths.includes(pathname)) {
            existedCookies.delete('session');
            return NextResponse.redirect(new URL('/', url));
        }
    }

}