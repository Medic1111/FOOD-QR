import { createContext, useState } from "react";

const DisplayCtx = createContext({
  isHero: true,
  setIsHero: () => {},
  isModal: false,
  setIsModal: () => {},
  openModalCloseHero: () => {},
  isCode: false,
  setIsCode: () => {},
  closeAllandShowCode: () => {},
});

export const DisplayProvider = (props) => {
  const [isHero, setIsHero] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [isCode, setIsCode] = useState(false);

  const openModalCloseHero = () => {
    setIsModal(true);
    setIsHero(false);
  };

  const closeAllandShowCode = () => {
    setIsHero(false);
    setIsModal(false);
    setIsCode(true);
  };

  return (
    <DisplayCtx.Provider
      value={{
        isHero: isHero,
        setIsHero: setIsHero,
        isModal: isModal,
        setIsModal: setIsModal,
        openModalCloseHero: openModalCloseHero,
        isCode: isCode,
        setIsCode: setIsCode,
        closeAllandShowCode: closeAllandShowCode,
      }}
    >
      {props.children}
    </DisplayCtx.Provider>
  );
};

export default DisplayCtx;
