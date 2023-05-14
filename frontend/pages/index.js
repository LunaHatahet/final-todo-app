import axios from "axios";

import AvailableLists from "../components/Todos/AvailableLists";

function HomePage(props) {
  const response = axios
    .get("http://localhost:8000/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTY1NGFlNi01M2FhLTQwNDQtODc5Mi1kMTBjNjMyNDU1ZjQiLCJpYXQiOjE2ODQwNjExMTd9.SU8YybOGY_Mhg1-65S_cX5BP-wkhThVZxrlKpVUSuCU",
      },
    })
    .then((response) => {
      const lists = response.data;

      return <AvailableLists lists={props.lists} />;
    });
}

// export async function getStaticProps() {
//   // fetch data from an API

//   // return {
//   //   props: {
//   //     lists,
//   //   },
//   //   revalidate: 1,
//   // };
// }

export default HomePage;
