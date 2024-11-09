import SignIn from "./sign-in";

const login = (user: any, token: string) => {
  console.log('User logged in:', user, 'Token:', token);
};

export default function Page() {
  return <SignIn login={login} />;
}
