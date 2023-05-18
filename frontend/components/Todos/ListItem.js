import { useRouter } from "next/router";
import axios from "axios";

import Card from "../UI/Card";
import classes from "./ListItem.module.css";

function ListItem(props) {
  const router = useRouter();

  function editHandler() {
    router.push("/edit/" + props.id);
  }

  async function deleteHandler() {
    try {
      await axios.post(
        `http://localhost:8000/delete/${props.id}`,
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE",
          },
        }
      );
      console.log("Item deleted!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const statusClass =
    props.status === "Complete" ? classes.completeStatus : classes.activeStatus;

  return (
    <Card>
      <div className={classes.container}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.items}</div>
        {props.attachment && (
          <div className={classes.description}>
            <a href={props.attachment} target="_blank" rel="noopener noreferrer">
            {props.attachment}
            </a>
          </div>
        )}        <div className={statusClass}>{props.status}</div>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ListItem;
