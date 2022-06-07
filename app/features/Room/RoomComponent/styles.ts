import { Form } from "@remix-run/react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100vw;
  height: 5rem;

  padding: 1rem;

  display: flex;
  align-items: center;
`;

export const SignOutButtonForm = styled(Form)`
  width: 3rem;
  height: 3rem;

  background: var(--background-light);
  border-radius: 1.5rem;
  margin-right: 1rem;

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

export const ConfigGameButton = styled(motion.button)`
  width: 3rem;
  height: 3rem;
  
  border: none;
  border-radius: 1.5rem;
  margin-right: auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 1rem;
  background: var(--background-light);
`;

export const CloseGameForm = styled(Form)`
  width: 8rem;
  height: 3rem;
  border: none;
  border-radius: 1.5rem;

  transition: background-color 0.2s;
  background-color: var(--background-light);

  &:hover {
    background-color: var(--warning);
  }
`;

export const CloseGameButton = styled.button`
  width: 8rem;
  height: 3rem;
  
  border: none;
  border-radius: 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 1rem;
  background-color: transparent;
`;

export const ResetGameForm = styled(Form)`
  width: 8rem;
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  margin: 0 1rem;

  transition: background-color 0.2s;
  background-color: var(--background-light);

  &:hover {
    background-color: var(--primary);
  }
`;

export const ResetGameButton = styled.button`
  width: 8rem;
  height: 3rem;
  
  border: none;
  border-radius: 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 1rem;
  background-color: transparent;
`;

export const Content = styled.main`
  width: 100vw;
  height: calc(100vh - 5rem - 7rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;