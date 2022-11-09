import { nanoid } from "nanoid";
import type { IDie, DieValuesType } from "../components/Die/index.types";

export function generateNewDie(): IDie {
  return {
    value: Math.ceil(Math.random() * 6) as DieValuesType,
    active: false,
    id: nanoid(),
  };
}

export function allNewDice(): IDie[] {
  const newDice: IDie[] = [];
  for (let i = 0; i < 10; i++) {
    newDice.push(generateNewDie());
  }
  return newDice;
}
