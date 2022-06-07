import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  height: 24rem;
  transition: all 0.2s;

  overflow: hidden;
  padding: 1rem;
  position: relative;
`;

export const Media = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  h2 {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;