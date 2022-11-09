import type { IDie } from "../components/Die/index.types";
import { useState, useEffect } from "react";
import { allNewDice } from "../utils/generateDies";

export default function useDice(): [
  IDie[],
  React.Dispatch<React.SetStateAction<IDie[]>>,
  typeof activateDice
] {
  const [dice, setDice] = useState<IDie[]>(
    () => JSON.parse(localStorage.getItem("dice") ?? "null") ?? allNewDice()
  );

  useEffect(() => {
    localStorage.setItem("dice", JSON.stringify(dice));
  }, [dice]);

  function activateDice(id: string): void {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, active: !die.active } : die;
      })
    );
  }

  return [dice, setDice, activateDice];
}
