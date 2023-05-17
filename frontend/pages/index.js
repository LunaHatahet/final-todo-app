import axios from "axios";

import AvailableLists from "../components/Todos/AvailableLists";

function HomePage(props) {
  return <AvailableLists lists={props.lists} />;
}

export async function getStaticProps() {
  try {
    const response = await axios.get("http://localhost:8000/", {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQxODQ3MDZ9.NUmQBiCTChFXFcJaUMPH1_8fVSPwtFtXyJI7xPRXVpE'
       }
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
