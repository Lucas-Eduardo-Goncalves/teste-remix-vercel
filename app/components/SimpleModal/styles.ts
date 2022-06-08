import { motion } from "framer-motion";
import styled from "styled-components";

type IModalProps = { isVisibled: boolean; }

export const Modal = styled.div<IModalProps>`
  display: ${({ isVisibled }) => isVisibled ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  
  padding: 0.4rem;
  overflow: hidden;
  z-index: 400;
  opacity: 1;
  
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: block;
  
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
`;

export const ModalContainer = styled.div`
  padding: 3rem;
  z-index: 1;
  background-color: var(--background);
  border-radius: 0.25rem;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const CloseModalButton = styled(motion.button)`
  position: absolute;
  right: 3rem;
  top: 2rem;
  height: 2.5rem;
  width: 2.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  border-radius: 1.25rem;
  background-color: var(--background-light);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;