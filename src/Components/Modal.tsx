
import * as css from "./Modal.css";

function Modal(props: any) {
  return (props.show && <div className={css.modal}>
    <div className={css.innerModal}>
      {props.children}
    </div>
  </div>)
}

export function ModalHeader(props: any) {
  return <div className={css.modalHeader}>
    {props.children}
  </div>
}

export function ModalContent(props: any) {
  return <div className={css.modalContent}>
    {props.children}
  </div>
}

export function ModalFooter(props: any) {
  return <div className={css.modalFooter}>
    {props.children}
  </div>
}

export default Modal;
