import { useRouter } from "next/router";

import UpdatePasswordForm from "../../components/Todos/UpdatePasswordForm";

function UpdatePassword() {
  const router = useRouter();

  function updatePasswordHandler(enteredPassword) {
    console.log(enteredPassword);
    // Update password in the server
    router.push("/login");
  }
  return <UpdatePasswordForm onUpdatePassword={updatePasswordHandler} />;
}

export async function getStaticProps(context) {
  // fetch data from backend
  // cannot use hooks

  const userToken = context.params.userToken;

  return {
    props: {
      password: {
        token: userToken,
      },
    },
  };
}

// needed in dynamic pages to know which id's to regenerate
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
