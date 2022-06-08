import { X } from "phosphor-react";
import type { ReactNode } from "react";

import { 
  Modal, 
  ModalOverlay, 
  ModalContainer, 
  CloseModalButton 
} from "./styles";

type ISimpleModalComponent = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

export function SimpleModal({ isOpen, onClose, children }: ISimpleModalComponent) {
  return (
    <Modal isVisibled={isOpen}>
      <ModalOverlay onClick={onClose} />

      <ModalContainer>
        <CloseModalButton 
          onClick={onClose}
          whileHover={{
            rotate: 180,
            transition: { duration: 0.4 },
          }}
        >
          <X size="1.2rem" weight="bold" />
        </CloseModalButton>

        {children}
      </ModalContainer>
    </Modal>
  )
}