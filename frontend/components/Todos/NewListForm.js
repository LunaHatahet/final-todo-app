import { useRef, useState } from "react";
import { useRouter } from "next/router";

import Card from "../UI/Card";
import classes from "./Forms.module.css";

function NewListForm(props) {
  const router = useRouter();

  const nameInputRef = useRef();
  const statusInputRef = useRef();
  const itemsInputRef = useRef();
  const [attachmentValue, setAttachmentValue] = useState(null);

  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", nameInputRef.current.value);
    formData.append("status", statusInputRef.current.value);
    formData.append("items", itemsInputRef.current.value);
    formData.append("attachment", attachmentValue);

    props.onAddList(formData);
  }

  function backHandler() {
    router.push("/");
  }
  
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="status">Status</label>
          <select id="status" ref={statusInputRef}>
            <option value="Active">Active</option>
            <option value="Complete">Complete</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="items">Items</label>
          <textarea id="items" required rows="5" ref={itemsInputRef}></textarea>
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
            Add List
          </button>
          <button type="button" onClick={backHandler}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewListForm;
