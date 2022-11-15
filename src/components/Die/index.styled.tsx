import styled from "styled-components";

export const StyledDie = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 48px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  background: ${({ theme }) => theme.diceBackground};

  &:hover {
    scale: 1.05;
    translate: 0px -2px;
  }

  &:active {
    scale: 0.95;
    translate: 0px 0px;
  }

  img {
    pointer-events: none;
  }
`;
