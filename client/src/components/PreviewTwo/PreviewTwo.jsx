import React from "react";
import classes from "../../pages/Specific.module.css";

const PreviewTwo = ({ catArr }) => {
  return (
    <React.Fragment>
      {catArr.map((obj, index) => {
        return (
          <div key={`Preview2_${index}`}>
            <h3 key={`CAT_${index}`} className={classes.h3}>
              {obj.category}
            </h3>
            {obj.dishes.map((dish, index) => {
              return (
                <div key={`Preview2Dish_${index}`} className={classes.dishBox}>
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
          </div>
        );
      })}

      {/* {catArr.length > 0 &&
        catArr.map((obj) => {
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
        })} */}
    </React.Fragment>
  );
};

export default PreviewTwo;
