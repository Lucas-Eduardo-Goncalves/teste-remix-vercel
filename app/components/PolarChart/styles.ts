import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  height: 24rem;
  transition: all 0.2s;

  overflow: hidden;
  padding: 1rem;
  position: relative;
`;

export const MediaArea = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  font-size: 1.5rem;
  font-weight: 600;

  height: 4rem;
  width: 4rem;
  border-radius: 2rem;

  background-color: var(--background-light);
`;