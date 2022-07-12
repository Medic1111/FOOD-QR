import { createContext, useState } from "react";

const MenuCtx = createContext({
  genInfo: {},
  setGenInfo: () => {},
  menu: [],
  addCategoryToMenu: (newCategory) => {},
  addDishToCat: (cat, dish) => {},
});

export const MenuCtxProvider = (props) => {
  const [genInfo, setGenInfo] = useState({
    resName: "",
    resAddress: "",
    resNumber: "",
    resHours: "",
  });

  const [menu, setMenu] = useState([]);

  const addCategoryToMenu = (category) => {
    setMenu((prev) => [...prev, { category, dishes: [] }]);
  };

  const addDishToCat = (cat, dish) => {
    let foundItem = menu.find((obj) => {
      return obj.category === cat;
    });
    foundItem.dishes.push(dish);
  };

  return (
    <MenuCtx.Provider
      value={{
        genInfo: genInfo,
        setGenInfo: setGenInfo,
        menu: menu,
        addCategoryToMenu: addCategoryToMenu,
        addDishToCat: addDishToCat,
      }}
    >
      {props.children}
    </MenuCtx.Provider>
  );
};

export default MenuCtx;
