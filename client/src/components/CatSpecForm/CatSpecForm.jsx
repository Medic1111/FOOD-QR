import classes from "../Form/Form.module.css";
import MenuCtx from "../../store/menu-ctx";
import React, { useContext, useState } from "react";
import DishForm from "../DishForm/DishForm";
import axios from "axios";
import DisplayCtx from "../../store/display-ctx";

const CatSpecForm = ({ setUrl }) => {
  const menuCtxManager = useContext(MenuCtx);
  const displayCtxManager = useContext(DisplayCtx);
  const [serverErr, setServerErr] = useState(false);

  const configMenu = {
    resName: menuCtxManager.genInfo.resName,
    resAddress: menuCtxManager.genInfo.resAddress,
    resNumber: menuCtxManager.genInfo.resNumber,
    resHours: menuCtxManager.genInfo.resHours,
    menu: menuCtxManager.menu,
  };

  const getCodeHandler = async () => {
    await axios
      .post("/api/new", configMenu)
      .then((serverRes) => {
        setUrl(serverRes.data.message);
        displayCtxManager.closeAllandShowCode(true);
        setServerErr(false);
      })
      .catch((err) => {
        setServerErr(true);
      });
  };

  return (
    <React.Fragment>
      {menuCtxManager.menu.map((obj, index) => {
        return <DishForm key={`FORM_CAT_${index}`} obj={obj} index={index} />;
      })}
      {serverErr && (
        <div className={classes.codeBtnBox}>
          <p className={classes.feedback}>
            Oops, something went wrong. Try getting code again!
          </p>
        </div>
      )}
      <div className={classes.codeBtnBox}>
        <button onClick={getCodeHandler} className={classes.btn}>
          Get Code
        </button>
      </div>
      ;
    </React.Fragment>
  );
};

export default CatSpecForm;
