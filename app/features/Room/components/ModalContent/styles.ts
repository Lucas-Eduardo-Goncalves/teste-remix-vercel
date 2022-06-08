import { Form } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 30rem;

  h2 {
    margin-bottom: 1rem;
  }

  fieldset {
    padding: 0.25rem;
    border-radius: 0.5rem;

    legend {
      padding: 0 0.5rem;
    }

    input {
      border: none;
      background-color: transparent;
      outline: none;
      padding: 0.90rem 0.90rem 1rem 0.90rem;

      width: 100%;
      font-size: 0.9rem;
    }

    select {
      border: none;
      background-color: transparent;
      outline: none;
      padding: 0.90rem 0.90rem 1rem 0.90rem;

      width: 100%;
      font-size: 0.9rem;
    }
  }
`;