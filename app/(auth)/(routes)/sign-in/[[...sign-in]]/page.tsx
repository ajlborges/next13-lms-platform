// Indicating that this is a server action function
"use server";

// Import your SignIn component
import SignIn from "./sign-in";

// Make the login function async
const login = async (user: any, token: string) => {
  try {
    console.log('User logged in:', user, 'Token:', token);
    // If you have async operations, such as saving to a database, you can do it here
    // For example, await someDatabaseCall(token);
  } catch (error) {
    console.error("Error during login:", error);
  }
};

// Export the page with the login function as a prop
export default function Page() {
  return <SignIn login={login} />;
}
