import { nanoid } from "nanoid";
import type { IDie, DieValuesType } from "../components/Die/index.types";

export function generateRandomDieValue(): DieValuesType {
  return Math.ceil(Math.random() * 6) as DieValuesType;
}

export function allNewDice(): IDie[] {
  const newDice: IDie[] = [];
  for (let i = 0; i < 10; i++) {
    newDice.push({
      value: generateRandomDieValue(),
      active: false,
      id: nanoid(),
    });
  }
  return newDice;
}

export function regenerateDie(die: IDie, newActive = die.active): IDie {
  return {
    value: generateRandomDieValue(),
    active: newActive,
    id: die.id,
  };
}
