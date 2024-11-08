// lib/auth.ts
import { parseCookies } from 'nookies';
import { GetServerSidePropsContext } from 'next';

export function getSession(req: GetServerSidePropsContext['req']) {
  const cookies = parseCookies({ req });

  const token = cookies.auth_token;

  if (!token) {
    return null;  // No session/token means the user is not authenticated
  }

  // Optionally, verify the token if using JWT (e.g., with jwt.verify)
  return token;
}
