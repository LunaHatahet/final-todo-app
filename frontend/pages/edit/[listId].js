import EditListForm from "../../components/Todos/EditListForm";

function EditList() {
  function editListHandler(enteredListData) {
    console.log(enteredListData);
    //Edit data in the server
  }
  return (
    <EditListForm
      onEditList={editListHandler}
      name="List One"
      status="Complete"
      items="12345"
      attachment="1681680426784-catPhoto.jpg"
    />
  );
}

export async function getStaticProps(context) {
  // fetch data from backend
  // cannot use hooks

  const listId = context.params.listId;

  console.log(listId);

  return {
    props: {
      listData: {
        id: listId,
        name: "List One",
        status: "Active",
        items: "wjlbefiuewvi",
        attachment: "1681680426784-catPhoto.jpg",
      },
    },
  };
}

// needed in dynamic pages to know which id's to regenerate
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          listId: "m1",
        },
      },
      {
        params: {
          listId: "m2",
        },
      },
    ],
  };
}

export default EditList;
