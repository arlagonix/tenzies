import type { Dispatch, SetStateAction } from "react";

export interface ToggleSwitchProps {
  /** Defines whether the checbox is checked or not */
  checkedHanlder: boolean;
  /** Functions that exectues every time we toggle the checkbox */
  onChangeHandler: Dispatch<SetStateAction<boolean>>;
}
