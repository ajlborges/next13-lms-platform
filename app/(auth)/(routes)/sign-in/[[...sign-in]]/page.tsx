'use client';

import SignIn from "./sign-in";

export default function Page() {
  const login = (user: any, token: string) => {
    // This function is for client-side logic only
    console.log('User logged in:', user, 'Token:', token);
    // Store the token in a state or update context
  };

  return <SignIn login={login} />;
}
