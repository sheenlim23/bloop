'use server';

import { cookies } from 'next/headers';

type CookieOptions = {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  path?: string;
  maxAge?: number;
};

export async function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
) {
  const cookieStore = await cookies();

  cookieStore.set(name, value, {
    httpOnly: options.httpOnly ?? true,
    secure: options.secure ?? process.env.NODE_ENV === 'production',
    sameSite: options.sameSite ?? 'strict',
    path: options.path ?? '/',
    maxAge: options.maxAge ?? 60 * 60 * 24 * 7,
  });
}

export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function deleteCookie(name: string) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}
