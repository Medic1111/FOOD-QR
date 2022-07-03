import axios from "axios";
import { useState } from "react";
import classes from "./Form.module.css";

const Form = ({ setUrl, setShowCode, setShowForm }) => {
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
      .then((serverRes) => {
        setUrl(serverRes.data.message);
        setShowCode(true);
        setShowForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>General Info</legend>
        <label className={classes.label} htmlFor="resName">
          {" "}
          Restaurant Name
        </label>
        <input
          className={classes.input}
          name="resName"
          onChange={changeInputHandler}
          value={userInput.resName}
          id="resName"
          type="text"
        />
        <label className={classes.label} htmlFor="resAddress">
          {" "}
          Address
        </label>
        <input
          className={classes.input}
          name="resAddress"
          onChange={changeInputHandler}
          value={userInput.resAddress}
          type="text"
          id="resAddress"
        />
        <label className={classes.label} htmlFor="resNumber">
          Phone Number
        </label>
        <input
          className={classes.input}
          name="resNumber"
          onChange={changeInputHandler}
          value={userInput.resPhone}
          type="text"
          id="resNumber"
        />
      </fieldset>
      <input type="submit" className={classes.btn} />
    </form>
  );
};

export default Form;
