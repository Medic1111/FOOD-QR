import axios from "axios";
import { useState } from "react";
import classes from "./Form.module.css";

const Form = ({ setUrl, url }) => {
  const [userInput, setUserInput] = useState({
    resName: "",
    resAddress: "",
    resNumber: "",
  });

  const changeInputHandler = (event) => {
    const { name, value } = event.target;

    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/new", userInput)
      .then((serverRes) => setUrl(serverRes.data.message))
      .catch((err) => console.log(err));

    // SHOW CODE WHEN SUCC
  };

  return (
    <form onSubmit={submitFormHandler}>
      <fieldset>
        <legend>General Info</legend>
        <label htmlFor="resName"> Restaurant Name</label>
        <input
          name="resName"
          onChange={changeInputHandler}
          value={userInput.resName}
          id="resName"
          type="text"
        />
        <label htmlFor="resAddress"> Address</label>
        <input
          name="resAddress"
          onChange={changeInputHandler}
          value={userInput.resAddress}
          type="text"
          id="resAddress"
        />
        <label htmlFor="resNumber">Phone Number</label>
        <input
          name="resNumber"
          onChange={changeInputHandler}
          value={userInput.resPhone}
          type="text"
          id="resNumber"
        />
        <input type="submit" />
      </fieldset>
    </form>
  );
};

export default Form;
