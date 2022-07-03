import { useState } from "react";
import CatSpecForm from "../CatSpecForm/CatSpecForm";
import EntryCatForm from "../EntryCatForm/EntryCatForm";
import GenForm from "../GenForm/GenForm";

const Form = ({ setUrl }) => {
  const [whichForm, setWhichForm] = useState(1);

  if (whichForm === 1) {
    return <GenForm setWhichForm={setWhichForm} />;
  }
  if (whichForm === 2) {
    return <EntryCatForm setWhichForm={setWhichForm} />;
  }
  if (whichForm === 3) {
    return <CatSpecForm setUrl={setUrl} />;
  }
};

export default Form;
