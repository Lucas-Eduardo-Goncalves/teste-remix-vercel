import styled, { css } from "styled-components";
import ImageBackgroundCard from "~/assets/background-card.png"

type ICardProps = {
  isSelected: boolean;
}

export const Container = styled.div`
  display: grid;
  width: 40rem;
  height: 24rem;

  grid-template-areas:
    "row_1 row_1 row_1 row_1 row_1"
    "row_2 row_2 row_2 row_2 row_2"
    "row_2 row_2 row_2 row_2 row_2"
    "row_3 row_3 row_3 row_3 row_3";
`;

export const RowOne = styled.div`
  grid-area: row_1;
  height: 6rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > div {
    height: 6rem;
    width: 7.20rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RowTwo = styled.div`
  grid-area: row_2;
  height: 12rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  > div {
    height: 12rem;
    width: 7.20rem;

    display: flex;
    align-items: center;

    &:first-child {
      padding-right: 2.7rem;
    }

    &:last-child {
      padding-left: 2.7rem;
    }
  }

  > span {
    width: 23.6rem;
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1rem 0;
    border-radius: 5rem;
    border: 2px solid var(--primary);

    background-color: var(--background-extra-light);

    > form button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      
      border: none;
      border-radius: 0.5rem;

      color: var(--shape);
      background-color: var(--primary);

      transition: background-color 0.2s;

      &:hover {
        background-color: var(--primary-light);
      }
    }
  } 
`;

export const RowThree = styled.div`
  grid-area: row_3;
  height: 6rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > div {
    height: 6rem;
    width: 7.20rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

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