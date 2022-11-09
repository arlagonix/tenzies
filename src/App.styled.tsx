import styled from "styled-components";

const MAX_WIDTH = "368px";

export const StyledH1 = styled.h1`
  font-size: 36px;
  font-weight: 800;
  text-align: center;
`;

export const StyledDescription = styled.p`
  text-align: center;
  font-size: 18px;
  max-width: min(28ch, 100% - 8px * 2);
`;

export const StyledTextHighlight = styled.span`
  color: ${({ theme }) => theme.highlight};
  font-weight: 800;
`;

export const StyledPlayZone = styled.main`
  width: min(${MAX_WIDTH}, 100% - 8px * 2);
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 32px 32px 16px;
  user-select: none;
`;

export const StyledDieContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledGameInfo = styled.h2`
  margin-top: 16px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const StyledNumberHighlight = styled.span`
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.highlightTextInside};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  border: none;
  display: flex;
  gap: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  font-size: 24px;
  border-radius: 8px;
  align-items: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    scale: 1.05;
    translate: 0px -2px;
  }

  &:active {
    scale: 0.95;
    translate: 0px 0px;
  }
`;

export const StyledContainer = styled.article`
  width: min(${MAX_WIDTH}, 100% - 8px * 2);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: ${({ theme }) => theme.gray};
  overflow: hidden;
`;

const STAT_HEIGHT = "48px";

export const StyledStatHeader = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 24px;
  height: ${STAT_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.cardBackground};
`;

export const StyledContainerItem = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  height: ${STAT_HEIGHT};
  font-size: 18px;
  display: flex;
  gap: 32px;
  padding: 16px;
  align-items: center;

  p:nth-child(1) {
    flex: 1;
  }

  p:nth-child(2) {
    font-weight: 800;
  }
`;
