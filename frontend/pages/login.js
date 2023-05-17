import axios from "axios";

import { useRouter } from "next/router";

import LoginForm from "../components/Todos/LoginForm";

function Login() {
  const router = useRouter();

  async function loginHandler(enteredLoginData) {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        enteredLoginData
      );
      console.log(enteredLoginData);
      console.log(response.data);
      router.push("/");
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data)
    }
  }
  return <LoginForm onLogin={loginHandler} />;
}

export default Login;
