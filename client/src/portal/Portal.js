import React from "react";
import ReactDOM from "react-dom";
import classes from "./Portal.module.css";
const root = document.getElementById("portal");

const Wrapper = (props) => {
  return <article className={classes.wrapper}>{props.children}</article>;
};

const Portal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Wrapper>{props.children}</Wrapper>, root)}
    </React.Fragment>
  );
};

export default Portal;
