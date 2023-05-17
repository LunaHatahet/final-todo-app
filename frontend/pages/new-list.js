import axios from 'axios';

import NewListForm from '../components/Todos/NewListForm';

function NewList() {
  async function addListHandler(enteredListData) {
    try {
      const response = await axios.post(
        "http://localhost:8000/",
        enteredListData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE",
          },
        }
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