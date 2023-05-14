import axios from "axios";

import AvailableLists from "../components/Todos/AvailableLists";

function HomePage(props) {
  return <AvailableLists lists={props.lists} />;
}

export async function getStaticProps() {
  try {
    // Fetch data from an API
    const response = await axios.get("http://localhost:8000/", {
      headers: {
        Authorization: 'Bearer d1b41c94f57ce66f9020b70f6bad485d3dcd4a73ffa7cd9643754535c7896ef7db2e2040772773d2efd00fde1eb4089b2a38a75e626d7d16042821c4b2a4a2bb'
       }
    });
    const lists = response.data;

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
