import { useRouter } from "next/router";
import axios from "axios";

import ResetPasswordForm from "@/components/Todos/ResetPasswordForm";

function ResetPassword() {
  const router = useRouter();

  async function resetPasswordHandler(enteredUserEmail) {
    try {
      const response = await axios.post(
        "http://localhost:8000/reset-password",
        { enteredUserEmail }
      );
      console.log(enteredUserEmail);
      if (response.status === 200) {
        console.log("Reset password email sent successfully.");
        alert("Check your email to reset your password.");
        router.push("/login");
      } else {
        console.log(
          "An error occurred while sending the reset password email."
        );
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    }
  }

  return <ResetPasswordForm onResetPassword={resetPasswordHandler} />;
}

export default ResetPassword;
