import { Portal } from "./Portal/Portal";

import styleScss from "./modal.module.scss";
import { FC, PropsWithChildren } from "react";

const { wrapper_modal, overlay_modal, container_modal } = styleScss;

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal: FC<PropsWithChildren<IModal>> = ({
  children,
  isOpen,
  closeModal,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={wrapper_modal}>
        <div className={overlay_modal} onClick={closeModal} />
        <div className={container_modal}>{children}</div>
      </div>
    </Portal>
  );
};
