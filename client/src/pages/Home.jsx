import Form from "../components/Form/Form";
import QRCode from "../components/QRCode/QRCode";
import React from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
  const [url, setUrl] = useState("");
  const [showHero, setShowHero] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showCode, setShowCode] = useState(false);
  return (
    <React.Fragment>
      <Header />
      {showHero && <Hero setShowForm={setShowForm} setShowHero={setShowHero} />}
      {showForm && (
        <Form
          setUrl={setUrl}
          url={url}
          setShowForm={setShowForm}
          setShowCode={setShowCode}
        />
      )}
      {showCode && <QRCode url={url} />}
    </React.Fragment>
  );
};

export default Home;
