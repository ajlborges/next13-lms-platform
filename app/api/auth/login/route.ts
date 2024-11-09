import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { email, password, rememberMe } = await req.json();

    // Make the call to your authentication service (e.g., Django, FastAPI)
    const response = await axios.post('http://127.0.0.1:8000/account/token/', {
      email,
      password,
      rememberMe,
    });

    console.log('app/api/auth/login/route.ts', response)

    if (response.data && response.data.access) {
      // If authentication is successful, return the token and user info
      return NextResponse.json({ success: true, data: response.data });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ success: false, message: 'An error occurred' });
  }
}
