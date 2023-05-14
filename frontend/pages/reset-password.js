import { useRouter } from 'next/router';

import ResetPasswordForm from '@/components/Todos/ResetPasswordForm';

function ResetPassword() {
    const router = useRouter();

  function resetPasswordHandler(enteredUserEmail) {
    console.log(enteredUserEmail);
    // Check if user is available then send email
    alert('Check your email to reset your password.')
    router.push('/login');
  }

  return <ResetPasswordForm onResetPassword={resetPasswordHandler} />
}

export default ResetPassword;