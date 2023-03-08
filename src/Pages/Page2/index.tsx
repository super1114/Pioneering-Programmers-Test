
import Button from "../../Components/Button";
import Modal, { ModalHeader, ModalContent, ModalFooter } from "../../Components/Modal";
import * as css from "./index.css";
import * as theme from "../../theme.css";
import { useContext, useState } from "react";
import ThemeContext from "../../contexts/themeContext";

function Page2() {
  const themeCtx = useContext(ThemeContext);
  const scheme = themeCtx.isDark() ? theme.dark : theme.light;

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [disabled, setDisabled3] = useState(false);

  const handleRemove = () => {
    setShow2(false);
    setX(X + 1);
  }

  const handleClickDelete = () => {
    setY(Y + 1);
    setShow3(true);
  }

  const handleDelete = () => {
    setDisabled3(!disabled);
    setShow3(false);
  }

  const getContent3 = () => {
    return disabled ? `Disabled ${Y}` : `Delete ${Y}`;
  }

  return (
    <div className={`${scheme} ${css.index}`}>
      <Button onClick={() => setShow1(true)}>Single CTA</Button>
      <Button onClick={() => setShow2(true)}>Remove {X}</Button>
      <Button onClick={handleClickDelete}>{getContent3()}</Button>
      <Modal show={show1}>
        <ModalHeader>
          Information
        </ModalHeader>
        <ModalContent>
          You have clicked the Single CTA button
        </ModalContent>
        <ModalFooter>
          <Button customStyle={css.modalOkButton} onClick={() => setShow1(false)}>OK</Button>
        </ModalFooter>
      </Modal>
      <Modal show={show2}>
        <ModalHeader>
          Remove?
        </ModalHeader>
        <ModalContent>
          Are you sure you want to remove the Remove {X} button?
        </ModalContent>
        <ModalFooter>
          <Button customStyle={css.modalCancelButton} onClick={() => setShow2(false)}>Cancel</Button>
          <Button customStyle={css.modalRemoveButton} onClick={handleRemove}>Remove</Button>
        </ModalFooter>
      </Modal>
      <Modal show={show3}>
        <ModalHeader>
          Delete?
        </ModalHeader>
        <ModalContent>
          {`Are you sure you want to delete the ${getContent3()} button? This cannot be undone!`}
        </ModalContent>
        <ModalFooter>
          <Button customStyle={css.modalCancelButton} onClick={() => setShow3(false)}>Cancel</Button>
          <Button customStyle={css.modalDeleteButton} onClick={handleDelete}>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Page2;
