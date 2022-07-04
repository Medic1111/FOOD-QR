import classes from "./Specific.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NotFound from "../components/NotFound/NotFound";

const Specific = () => {
  const urlId = useParams().id;
  const [notFound, setNotFound] = useState(false);
  const [info, setInfo] = useState({
    resName: "",
    resNumber: "",
    resAddress: "",
    resHours: "",
    menu: [],
  });

  const fetchApi = () => {
    axios
      .get(`/api/restaurants/${urlId}`)
      .then((serverRes) => {
        setInfo(serverRes.data);
        setNotFound(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setNotFound(true);
        }
      });
  };

  useEffect(fetchApi, []);

  if (notFound === false) {
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
        {info.menu.map((obj) => {
          return (
            <React.Fragment>
              <h3 className={classes.h3}>{obj.category}</h3>
              {obj.dishes.map((dish) => {
                return (
                  <div className={classes.dishBox}>
                    <div className={classes.dishTxtBox}>
                      <p className={classes.dishName}>{dish.dish}</p>
                      <p className={classes.dishDescription}>
                        {dish.description}
                      </p>
                    </div>
                    <p className={classes.dishPrice}>{dish.price}</p>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Specific;
