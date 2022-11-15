import { useState, useEffect } from "react";
import type { IStats } from "../App.types";

interface IUseStats {
  /** Object with game statistics */
  stats: IStats;
  /** Setter for stats */
  setStats: React.Dispatch<React.SetStateAction<IStats>>;
}

export default function useStats(): IUseStats {
  const [stats, setStats] = useState<IStats>(
    () =>
      JSON.parse(localStorage.getItem("stats") ?? "null") ?? {
        rollsNumber: 0,
        victories: 0,
        minRolls: null,
      }
  );

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  return { stats, setStats };
}
