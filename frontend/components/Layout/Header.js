import Link from "next/link";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>To-Do Lists</h1>
    </header>
  );
};

export default Header;
