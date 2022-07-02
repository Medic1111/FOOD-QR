import classes from "./Specific.module.css";
import { useLocation, useParams } from "react-router-dom";
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
    <React.Fragment>
      <h1>{info.resName}</h1>
      <p>{info.resNumber}</p>
      <p>{info.resAddress}</p>
    </React.Fragment>
  );
};

export default Specific;
