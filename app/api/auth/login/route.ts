import { NextResponse } from 'next/server';
import axios from 'axios';

console.log('app/api/auth/login/route.ts')
export async function POST(req: Request) {
  try {
    console.log('did it get here')
    const { email, password, rememberMe } = await req.json();
    console.log('did it get here')

    console.log(`${process.env.BACKEND_API_URL || ""}/account/token/`)

    const response = await axios.post(`${process.env.BACKEND_API_URL || ""}/account/token/`, {
      email,
      password,
      rememberMe,
    });


    if (response.data && response.data.access) {
      return NextResponse.json({ success: true, data: response.data });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ success: false, message: 'An error occurred' });
  }
}
