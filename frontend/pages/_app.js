import { Fragment } from "react";

import "../styles/globals.css";
import Header from "../components/Layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "6rem" }}>
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}
