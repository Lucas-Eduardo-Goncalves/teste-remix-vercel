import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media(max-width: 950px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Apresentation = styled.aside`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5rem;

  > img {
    height: 4rem;
  }

  @media(max-width: 450px) {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.2rem;

    > img {
      height: 3rem;
    }
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;

  max-width: 27rem;
  width: 100%;

  border-radius: 0.25rem;
  background-color: var(--background-light);

  @media(max-width: 450px) {
    max-width: 22rem;
    font-size: 0.9rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 3rem;

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

    @media(max-width: 450px) {
      gap: 0.75rem;
      padding: 2rem;

      > input {
        font-size: 0.9rem;
      }
    }
  }

  > a {
    font-size: 0.9rem;
    text-decoration: none;
    margin: 0 3rem 3rem 3rem;

    transition: margin 0.2s;

    &:hover {
      margin-left: 3.25rem;
      text-decoration: underline;
    }

    @media(max-width: 450px) {
      font-size: 0.9rem;
      margin: 0 2rem 2rem 2rem;
      
      &:hover {
        margin-left: 2.25rem;
      }
    }
  }
`;