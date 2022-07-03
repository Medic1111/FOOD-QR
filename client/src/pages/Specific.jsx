import classes from "./Specific.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Specific = () => {
  const urlId = useParams().id;

  const [info, setInfo] = useState({
    resName: "",
    resNumber: "",
    resAddress: "",
  });

  const fetchApi = () => {
    axios
      .get(`/api/restaurants/${urlId}`)
      .then((serverRes) => setInfo(serverRes.data))
      .catch((err) => console.log(err));
  };

  useEffect(fetchApi, []);

  return (
    <div className={classes.div}>
      <header className={classes.header}>
        <h2 className={classes.h2}>{info.resName}</h2>
      </header>
      <div className={classes.divContact}>
        <span className={classes.span}>{info.resNumber}</span>
        <span className={classes.span}>{info.resAddress}</span>
      </div>
    </div>
  );
};

export default Specific;
