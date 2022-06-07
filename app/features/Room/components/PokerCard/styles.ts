import styled, { css } from "styled-components";

type ICardDTO = {
  isSelected: boolean;
}

export const Card = styled.button<ICardDTO>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  width: 3.5rem;

  border: none;
  border-radius: 0.25rem;
  background-color: var(--background-light);

  transition: all 0.2s;

  &:hover {
    margin-bottom: 0.75rem;
    background-color: var(--primary-light)
  }

  ${(props) => props.isSelected && css`
    margin-bottom: 1rem !important;
    background-color: var(--primary) !important;
  `}
`;