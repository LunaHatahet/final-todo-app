import { useRouter } from "next/router";
import axios from "axios";

import SignupForm from "../components/Todos/SignupForm";

function Signup() {
  const router = useRouter();

  async function signupHandler(enteredSignupData) {
    try {
      console.log(enteredSignupData);
      const response = await axios.post(
        "http://localhost:8000/signup",
        enteredSignupData
      );
      console.log(response.data);
      alert("Account created successfully!");
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Failed to create account");
    }
  }

  return <SignupForm onSignup={signupHandler} />;
}

export default Signup;
