import styled from "styled-components";

export const Container = styled.button`
  font-size: 1rem;
  line-height: 3rem;
  
  height: 3rem;
  width: 15rem;
  padding: 0 1rem;
  overflow: hidden;
  background-color: var(--background-light);

  text-overflow: ellipsis;
  text-align: center;

  border: 1px solid transparent;
  border-radius: 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;