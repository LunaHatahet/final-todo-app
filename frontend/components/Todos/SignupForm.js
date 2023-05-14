import { useRef } from "react";
import Link from "next/link";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function SignupForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onSignup(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name:</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email:</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
      <Link href="/login">
        <h5>Already have an account? Login here!</h5>
      </Link>
    </Card>
  );
}

export default SignupForm;
