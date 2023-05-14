import { useRef } from "react";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function UpdatePasswordForm(props) {
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;

    const userPassword = {
      password: enteredPassword,
    };

    props.onUpdatePassword(userPassword);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>

        <div className={classes.control}>
          <label htmlFor="password">Enter new password:</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default UpdatePasswordForm;
