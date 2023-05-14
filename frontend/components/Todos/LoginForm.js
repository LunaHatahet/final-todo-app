import { useRef } from "react";
import Link from "next/link";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function LoginForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onLogin(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email:</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        
        <div className={classes.control}>
          <label htmlFor="password">Password:</label>
          <input type="password" required id="password" ref={passwordInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
          <Link href="/reset-password">
            <h5>Forgot your password?</h5>
          </Link>

          <Link href="/signup">
            <h5>Don't have an account? Sign up here!</h5>
          </Link>
    </Card>
  );
}

export default LoginForm;
