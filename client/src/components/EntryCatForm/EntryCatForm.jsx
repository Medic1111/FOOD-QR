import { useContext, useState } from "react";
import classes from "../Form/Form.module.css";
import MenuCtx from "../../store/menu-ctx";

const EntryCatForm = ({ setWhichForm }) => {
  const menuCtxManager = useContext(MenuCtx);

  const [catOne, setCatOne] = useState("");
  const [catTwo, setCatTwo] = useState("");
  const [catThree, setCatThree] = useState("");
  const [catFour, setCatFour] = useState("");
  const [catFive, setCatFive] = useState("");

  const addCategoriesToMenu = (e) => {
    e.preventDefault();
    let catArr = [catOne, catTwo, catThree, catFour, catFive];

    let filtered = catArr.filter((item) => {
      return item !== "";
    });

    filtered.forEach((category) => {
      menuCtxManager.addCategoryToMenu(category);
    });
    setWhichForm((prev) => prev + 1);
  };

  return (
    <form onSubmit={addCategoriesToMenu} className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Category</legend>
        <label className={classes.label}>Enter up to 5 categories</label>
        <input
          value={catOne}
          onChange={(e) => setCatOne(() => e.target.value)}
          className={classes.input}
          type="text"
          placeholder="Ex: Appetizer"
        />

        <input
          onChange={(e) => setCatTwo(() => e.target.value)}
          value={catTwo}
          className={classes.input}
          type="text"
          placeholder="Ex: Entree"
        />
        <input
          onChange={(e) => setCatThree(() => e.target.value)}
          value={catThree}
          className={classes.input}
          type="text"
          placeholder="Ex: Sides"
        />
        <input
          onChange={(e) => setCatFour(() => e.target.value)}
          value={catFour}
          className={classes.input}
          type="text"
          placeholder="Ex: Desserts"
        />
        <input
          onChange={(e) => setCatFive(() => e.target.value)}
          value={catFive}
          className={classes.input}
          type="text"
          placeholder="Ex: Drinks"
        />
      </fieldset>
      <input type="submit" className={classes.btn} />
    </form>
  );
};

export default EntryCatForm;
