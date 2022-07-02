import Form from "../components/Form/Form";
import QRCode from "../components/QRCode/QRCode";
import React from "react";
import { useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");

  return (
    <React.Fragment>
      <h1>FOOD QR</h1>
      <Form setUrl={setUrl} url={url} />
      <QRCode url={url} />
    </React.Fragment>
  );
};

export default Home;
