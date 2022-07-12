import classes from "../../pages/Specific.module.css";
import React from "react";
const Preview = ({ info }) => {
  return (
    <div className={classes.div}>
      <header className={classes.header}>
        <h2 className={classes.h2}>{info.resName}</h2>
      </header>
      <div className={classes.divContact}>
        <span className={classes.span}>{info.resNumber}</span>
        <span className={classes.span}>{info.resAddress}</span>
        <span className={classes.span}>{info.resHours}</span>
      </div>
    </div>
  );
};

export default Preview;
