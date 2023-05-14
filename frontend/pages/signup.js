import { useRouter } from 'next/router';

import SignupForm from '../components/Todos/SignupForm';

function Signup() {
    const router = useRouter();

  function signupHandler(enteredSignupData) {
    console.log(enteredSignupData);
    // Check if data is valid and passwords match then route to login page
    alert('Account created successfully!')
    router.push('/login');
  }

  return <SignupForm onSignup={signupHandler} />
}

export default Signup;