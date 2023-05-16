import { useRouter } from "next/router";

import axios from "axios";

import UpdatePasswordForm from "../../components/Todos/UpdatePasswordForm";

function UpdatePassword({ token }) {
  const router = useRouter();

  async function updatePasswordHandler(enteredPassword) {
    try {
      await axios.post(`http://localhost:8000/reset-password/${token}`, {
        password: enteredPassword,
        token: token,
      });
      console.log(enteredPassword);
      router.push("/login");
    } catch (error) {
      console.log("Error updating password:", error);
    }
  }
  return <UpdatePasswordForm onUpdatePassword={updatePasswordHandler} />;
}

export async function getStaticProps(context) {
  const userToken = context.params.userToken;

  return {
    props: {
      token: userToken,
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          userToken: "t1",
        },
      },
      {
        params: {
          userToken: "t2",
        },
      },
    ],
  };
}

export default UpdatePassword;
