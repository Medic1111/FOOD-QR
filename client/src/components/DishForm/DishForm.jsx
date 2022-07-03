import classes from "../Form/Form.module.css";
import MenuCtx from "../../store/menu-ctx";
import { useContext, useState } from "react";

const DishForm = ({ obj }) => {
  const menuCtxManager = useContext(MenuCtx);
  const [showAdd, setShowAdd] = useState(false);
  const [showRequired, setShowRequired] = useState(false);
  const [dish, setDish] = useState({
    dish: "",
    description: "",
    price: "",
  });

  const inputChange = (e) => {
    setShowAdd(false);
    setShowRequired(false);
    const { name, value } = e.target;

    setDish((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addDishToCatHandler = (e) => {
    e.preventDefault();
    if (dish.dish !== "" && dish.description !== "" && dish.price !== "") {
      menuCtxManager.addDishToCat(obj.category, dish);
      setDish({
        dish: "",
        description: "",
        price: "",
      });
      setShowAdd(true);
    } else {
      setShowRequired(true);
    }
  };

  return (
    <form className={classes.form}>
      <p className={classes.feedback}>Enter one dish/meal at a time</p>
      <p className={classes.feedback}>
        When you're done with all entries, get your QR Code
      </p>
      <p className={classes.feedback}>Don't forget to print it!</p>

      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>{obj.category}</legend>
        {showRequired && (
          <p className={classes.feedback}>All fields are required</p>
        )}
        {showAdd && <p className={classes.feedback}>Entry Added</p>}
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
