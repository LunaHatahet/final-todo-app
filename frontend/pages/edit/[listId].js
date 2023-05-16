import EditListForm from "../../components/Todos/EditListForm";

function EditList({ listData }) {
  async function editListHandler(enteredListData) {
    try {
      await axios.post(
        `http://localhost:8000/edit/${listData.id}`,
        enteredListData
      );
      console.log("List has been updated");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <EditListForm
      onEditList={editListHandler}
      name={listData.name}
      status={listData.status}
      items={listData.items}
      attachment={listData.attachment}
    />
  );
}

export async function getStaticProps(context) {
  const listId = context.params.listId;

  console.log(listId);

  try {
    const response = await axios.get(`http://localhost:8000/edit/${listId}`);
    const listData = response.data;

    return {
      props: {
        listData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

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
