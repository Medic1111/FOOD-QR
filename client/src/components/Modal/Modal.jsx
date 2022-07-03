import Portal from "../../portal/Portal";
import Form from "../Form/Form";
const Modal = ({ setUrl }) => {
  return (
    <Portal>
      <Form setUrl={setUrl} />
    </Portal>
  );
};

export default Modal;
