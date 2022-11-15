import type { DieProps, DieValuesStrType } from "./index.types";
import { ThemeContext } from "styled-components";
import { StyledDie } from "./index.styled";
import { MAPPING } from "./consts";
import { useContext } from "react";

function Die({ value, active, activateDice }: DieProps) {
  const strValue: DieValuesStrType = value.toString() as DieValuesStrType;
  const themeContext = useContext(ThemeContext);

  let displayedIcon: JSX.Element;
  if (active) displayedIcon = MAPPING[strValue].active;
  else if (themeContext.isDarkMode)
    displayedIcon = MAPPING[strValue].inactiveDark;
  else displayedIcon = MAPPING[strValue].inactive;

  return <StyledDie onClick={activateDice}>{displayedIcon}</StyledDie>;
}

export default Die;
