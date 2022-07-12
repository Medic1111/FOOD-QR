import classes from "../Form/Form.module.css";
import React, { useContext, useState } from "react";
import MenuCtx from "../../store/menu-ctx";
import Preview from "../Preview/Preview";

const GenForm = ({ setWhichForm }) => {
  const menuCtxManager = useContext(MenuCtx);
  const [showRequired, setShowRequired] = useState(false);
  const [userInput, setUserInput] = useState({
    resName: "",
    resAddress: "",
    resNumber: "",
    resHours: "",
  });

  const changeInputHandler = (event) => {
    setShowRequired(false);
    const { name, value } = event.target;

    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addFormToMenuHandler = (e) => {
    e.preventDefault();
    if (
      userInput.resAddress !== "" &&
      userInput.resName !== "" &&
      userInput.resNumber !== "" &&
      userInput.resHours !== ""
    ) {
      menuCtxManager.setGenInfo(userInput);
      setWhichForm((prev) => prev + 1);
    } else {
      setShowRequired(true);
    }
  };

  return (
    <div className={classes.previewDiv}>
      <form onSubmit={addFormToMenuHandler} className={classes.form}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>General Info</legend>
          {showRequired && (
            <p className={classes.feedback}>All fields are required</p>
          )}
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
          <label className={classes.label} htmlFor="resHours">
            Business Hours
          </label>
          <input
            className={classes.input}
            name="resHours"
            onChange={changeInputHandler}
            value={userInput.resHours}
            type="text"
            id="resHours"
          />
        </fieldset>
        <input type="submit" className={classes.btn} />
      </form>
      {/* TEST- including fragment */}
      <div className={classes.previewBox}>
        <Preview info={userInput} />
        {/* <Preview info={userInput} /> */}
      </div>
    </div>
  );
};

export default GenForm;
