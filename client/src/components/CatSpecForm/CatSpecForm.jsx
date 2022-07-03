import classes from "../Form/Form.module.css";
import MenuCtx from "../../store/menu-ctx";
import React, { useContext } from "react";
import DishForm from "../DishForm/DishForm";
import axios from "axios";
import DisplayCtx from "../../store/display-ctx";

const CatSpecForm = ({ setUrl }) => {
  const menuCtxManager = useContext(MenuCtx);
  const displayCtxManager = useContext(DisplayCtx);

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      {menuCtxManager.menu.map((obj, index) => {
        return <DishForm key={`FORM_CAT_${index}`} obj={obj} index={index} />;
      })}
      <button onClick={getCodeHandler} className={classes.btn}>
        Get Code
      </button>
      ;
    </React.Fragment>
  );
};

export default CatSpecForm;
