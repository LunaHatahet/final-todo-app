import { useRouter } from 'next/router';

import LoginForm from '../components/Todos/LoginForm';

function Login() {
    const router = useRouter();

  function loginHandler(enteredLoginData) {
    console.log(enteredLoginData);
    // Check if enteredLoginData is avaialable in database then login
    router.push('/');
  }
  return <LoginForm onLogin={loginHandler} />
}

export default Login;