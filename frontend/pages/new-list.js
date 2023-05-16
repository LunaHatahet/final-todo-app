import NewListForm from '../components/Todos/NewListForm';

import axios from 'axios';

function NewList() {
  async function addListHandler(enteredListData) {
    try {
      const response = await axios.post(
        "http://localhost:8000/",
        enteredListData
      );
      console.log(response.data);
      alert("New list created!");
    } catch (error) {
      console.log(error.response.data);
      alert("Failed to create new list");
    }
  }

  return <NewListForm onAddList={addListHandler} />
}

export default NewList;