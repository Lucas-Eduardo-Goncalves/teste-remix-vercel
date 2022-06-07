import { Form } from "@remix-run/react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const SignOutButtonForm = styled(Form)`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 3rem;
  height: 3rem;

  background: var(--background-light);
  border-radius: 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SignOutButton = styled(motion.button)`
  width: 3rem;
  height: 3rem;
  
  border-radius: 1.5rem;
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-width: 26.67rem;
  gap: 1.5rem;
  padding: 3rem;
  
  border-radius: 0.25rem;
  background-color: var(--background-light);
`;

export const Section = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  > input {
    outline: none;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    
    transition: filter 0.2s;
    background-color: var(--background);
    
    &:focus, &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const FormAreaDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FormDivider = styled.div`
  flex: 1;
  height: 1px;
  background-color: var(--background-extra-light);
`;

export const MenuButtonArea = styled.aside`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;