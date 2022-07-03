import classes from "../Form/Form.module.css";
import MenuCtx from "../../store/menu-ctx";
import { useContext, useState } from "react";

const DishForm = ({ obj }) => {
  const menuCtxManager = useContext(MenuCtx);

  const [dish, setDish] = useState({
    dish: "",
    description: "",
    price: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;

    setDish((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addDishToCatHandler = (e) => {
    e.preventDefault();
    menuCtxManager.addDishToCat(obj.category, dish);
  };

  return (
    <form className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>{obj.category}</legend>
        <input
          name="dish"
          onChange={inputChange}
          value={dish.dish}
          placeholder="Dish"
          className={classes.input}
          type="text"
        />
        <input
          name="description"
          onChange={inputChange}
          placeholder="Description"
          className={classes.input}
          type="text"
          value={dish.description}
        />
        <input
          name="price"
          onChange={inputChange}
          value={dish.price}
          placeholder="price"
          className={classes.input}
          type="text"
        />
        <button className={classes.btn} onClick={addDishToCatHandler}>
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default DishForm;
