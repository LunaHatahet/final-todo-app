import { useRef, useState } from "react";
import { useRouter } from "next/router";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function EditListForm(props) {
  const router = useRouter();

  const nameInputRef = useRef();
  const statusInputRef = useRef();
  const itemsInputRef = useRef();
  const [attachmentValue, setAttachmentValue] = useState(null);
  const [status, setStatus] = useState(props.status);

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredItems = itemsInputRef.current.value;

    const formData = new FormData();
    formData.append("name", enteredName);
    formData.append("status", status);
    formData.append("items", enteredItems);
    formData.append("attachment", attachmentValue);

    props.onEditList(formData);
  }

  function backHandler() {
    router.push("/");
  }

  function statusChangeHandler(event) {
    setStatus(event.target.value);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            defaultValue={props.name}
            ref={nameInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            ref={statusInputRef}
            value={status}
            onChange={statusChangeHandler}
          >
            <option value="Active">Active</option>
            <option value="Complete">Complete</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="items">Items</label>
          <textarea
            id="items"
            required
            rows="5"
            defaultValue={props.items}
            ref={itemsInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="attachment">Attachment</label>
          <input
            type="file"
            id="attachment"
            accept="image/*"
            onChange={(e) => setAttachmentValue(e.target.files[0])}
          />
        </div>

        <div className={classes.actions}>
          <button type="submit" onClick={backHandler}>
            Update List
          </button>
          <button type="button" onClick={backHandler}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}

export default EditListForm;
