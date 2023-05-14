import NewListForm from '../components/Todos/NewListForm';

function NewList() {
  function addListHandler(enteredListData) {
    console.log(enteredListData);
    //Add data to the server
  }

  return <NewListForm onAddList={addListHandler} />
}

export default NewList;