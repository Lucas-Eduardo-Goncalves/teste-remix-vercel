import styled, { css } from "styled-components";
import ImageBackgroundCard from "~/assets/background-card.png"

type ICardProps = {
  isSelected: boolean;
}

export const Card = styled.div<ICardProps>`
  display: flex;
  align-items: center;

  height: 6rem;
  width: 4.5rem;

  overflow: hidden;
  text-overflow: ellipsis;

  border: none;
  border-radius: 0.25rem;

  background-color: var(--background-light);
  background-image: url(${ImageBackgroundCard});

  border: 2px solid var(--primary-light);

  ${(props) => props.isSelected && css`
    background-color: var(--primary);
    border-color: var(--primary);
  `}
`;

export const CardView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6rem;
  width: 4.5rem;

  overflow: hidden;
  text-overflow: ellipsis;

  border: none;
  border-radius: 0.25rem;

  color: var(--shape);
  background-color: var(--background-light);

  border: 2px solid var(--primary-light);
`;