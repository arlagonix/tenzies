export interface IStats {
  /** Number of rolls made in the current game */
  rollsNumber: number;
  /** Total number of victories */
  victories: number;
  /** Minimal number of rolls in all games */
  minRolls: null | number;
}
