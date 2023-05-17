import { Fragment, useState } from "react";

import axios from "axios";

import AvailableLists from "../components/Todos/AvailableLists";
import Pagination from "../components/Todos/Pagination";

function HomePage(props) {
  const [pageSize, setPageSize] = useState(5); 
  const [lists, setLists] = useState(props.lists);

  const handlePageSizeChange = async (event) => {
    const newSize = parseInt(event.target.value);
    setPageSize(newSize);
    try {
      const response = await axios.get(
        `http://localhost:8000/?pageSize=${newSize}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE",
          },
        }
      );
      setLists(response.data.lists);
    } catch (error) {
      console.log(error);
      setLists([]);
    }
  };

  return (
    <Fragment>
      <Pagination pageSize={pageSize} onPageSizeChange={handlePageSizeChange} />
      <AvailableLists lists={lists} />
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get("http://localhost:8000/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE",
      },
    });
    const lists = response.data.lists;

    return {
      props: {
        lists,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        lists: [],
      },
      revalidate: 1,
    };
  }
}

export default HomePage;
