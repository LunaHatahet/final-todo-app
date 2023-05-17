import Link from "next/link";

import Card from "../UI/Card";
import classes from "./AvailableLists.module.css";
import ListItem from "./ListItem";
import { Fragment } from "react";

const AvailableLists = (props) => {
  const todoList = props.lists.map((list) => (
    <div className={classes.item} key={list.id}>
      <ListItem
        id={list.id}
        name={list.name}
        status={list.status}
        items={list.items}
        attachment={list.attachment}
      />
    </div>
  ));

  return (
    <Fragment>
      <Card>
        <div className={classes.actions}>
          <Link href="/new-list">
            <button> + Create New List </button>
          </Link>
        </div>
        {todoList}
      </Card>
      <div className={classes.logout}>
        <Link href="/login">
          <button> Logout </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default AvailableLists;
