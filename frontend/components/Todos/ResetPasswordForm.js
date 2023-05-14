import { useRef } from "react";
import Link from "next/link";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function ResetPasswordForm(props) {
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const userEmail = {
      email: enteredEmail,
    };

    props.onResetPassword(userEmail);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter your E-mail:</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Reset Password</button>
        </div>
      </form>
      <Link href="/login">
        <h5>Remember your password? Login here!</h5>
      </Link>
    </Card>
  );
}

export default ResetPasswordForm;
