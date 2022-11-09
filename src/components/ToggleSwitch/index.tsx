import type { ToggleSwitchProps } from "./index.types";
import { StyledToggleSwitch } from "./index.styled";

export default function ToggleSwitch({ onChangeHandler, checkedHanlder }: ToggleSwitchProps) {
  return (
    <StyledToggleSwitch>
      <input type="checkbox" onChange={onChangeHandler as any} checked={checkedHanlder} />
      <span></span>
    </StyledToggleSwitch>
  );
}
