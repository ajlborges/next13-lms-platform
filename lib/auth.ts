// lib/auth.ts
import { NextRequest } from 'next/server';

export function getSession(req: NextRequest) {
  // Manually parse cookies from the request
  const cookies = req.cookies;

  // Extract the token from cookies
  const token = cookies.get('auth_token');

  if (!token) {
    return null; // No session/token means the user is not authenticated
  }

  return token;
}
