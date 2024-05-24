import Modal from "react-modal";

import { ModalTypes } from "@/config/modals";
import { Icons } from "@/config/icons";

import * as SC from "./ModalBase.styled";

Modal.setAppElement("#root");

const Modals = {
  [ModalTypes.CONTENT]: (props, children) => (
    <SC.ContentModal {...props}>{children}</SC.ContentModal>
  ),
  [ModalTypes.NOTIFICATION]: (props, children) => (
    <SC.NotificationModal {...props}>{children}</SC.NotificationModal>
  ),
};

export const ModalBase = ({ isOpen, onClose, type, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
      className="_"
      overlayClassName="_"
      contentElement={Modals[type]}
      overlayElement={(props, contentElement) => (
        <SC.Backdrop {...props}>{contentElement}</SC.Backdrop>
      )}
    >
      <SC.CloseBtn
        type="button"
        onClick={onClose}
        aria-label="close modal window"
      >
        <SC.CrossIcon>
          <use href={Icons.cross}></use>
        </SC.CrossIcon>
      </SC.CloseBtn>
      <SC.ModalContent>{children}</SC.ModalContent>
    </Modal>
  );
};
