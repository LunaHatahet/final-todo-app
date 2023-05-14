import { useRef, useState } from "react";
import Link from "next/link";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function EditListForm(props) {
  const nameInputRef = useRef();
  const statusInputRef = useRef();
  const itemsInputRef = useRef();
  const [attachmentValue, setAttachmentValue] = useState(null);

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    const enteredItems = itemsInputRef.current.value;

    const listData = {
      name: enteredName,
      status: enteredStatus,
      items: enteredItems,
      attachment: attachmentValue,
    };

    props.onEditList(listData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" value={props.name} ref={nameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="status">Status</label>
          <select id="status" ref={statusInputRef}>
            <option value="active">Active</option>
            <option value="complete">Complete</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="items">Items</label>
          <textarea id="items" required rows="5" value={props.items} ref={itemsInputRef}></textarea>
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
          <Link href="/">
            <button>Update List</button>
          </Link>
          <Link href="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default EditListForm;
