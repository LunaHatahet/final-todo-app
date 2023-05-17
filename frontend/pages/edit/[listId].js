import axios from "axios";

import EditListForm from "../../components/Todos/EditListForm";

function EditList({ listData }) {
  async function editListHandler(enteredListData) {
    try {
      await axios.post(
        `http://localhost:8000/edit/${listData.id}`,
        enteredListData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE",
          },
        }
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
    const response = await axios.get(`http://localhost:8000/edit/${listId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE",
      },
    });
    const listData = response.data.todo;

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
