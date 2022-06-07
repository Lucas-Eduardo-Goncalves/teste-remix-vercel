import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 3.25rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;
  background-color: var(--primary);

  &:hover {
    filter: brightness(0.9);
  }
  
  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.9);
  }

  @media(max-width: 450px) {
    font-size: 0.9rem;
    height: 3rem;
  }
`;

export const Motion = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);
`;