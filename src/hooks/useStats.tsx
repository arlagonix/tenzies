import { useState, useEffect } from "react";
import type { IStats } from "../App.types";

export default function useStats(): [IStats, React.Dispatch<React.SetStateAction<IStats>>] {
  const [stats, setStats] = useState<IStats>(
    () =>
      JSON.parse(localStorage.getItem("stats") ?? "null") ?? {
        rollsNumber: 0,
        victories: 0,
        minRolls: null,
        minGameTime: null,
      }
  );

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  return [stats, setStats];
}
