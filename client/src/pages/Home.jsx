import QRCode from "../components/QRCode/QRCode";
import React, { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import DisplayCtx from "../store/display-ctx";

const Home = () => {
  const ctxManager = useContext(DisplayCtx);

  const [url, setUrl] = useState("");

  return (
    <React.Fragment>
      <Header />
      {ctxManager.isHero && <Hero />}
      {ctxManager.isModal && <Modal setUrl={setUrl} />}
      {ctxManager.isCode && <QRCode url={url} />}
    </React.Fragment>
  );
};

export default Home;
