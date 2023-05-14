import { useRouter } from "next/router";

import Card from "../UI/Card";
import classes from "./ListItem.module.css";

function ListItem(props) {
  const router = useRouter();

  function editHandler() {
    router.push("/edit/" + props.id);
  }

  function deleteHandler() {
    // delete item from database and re-render (useEffect/useState)?
    console.log("Item deleted!");
  }

  const statusClass = props.status === "Complete" ? classes.completeStatus : classes.activeStatus;

  return (
    <Card>
      <div className={classes.container}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.items}</div>
        <div className={classes.description}>{props.attachment}</div>
        <div className={statusClass}>{props.status}</div>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ListItem;
