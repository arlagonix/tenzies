export type DieValuesType = 1 | 2 | 3 | 4 | 5 | 6;

// Required for a mapping object, otherwise TS yells as crazy
export type DieValuesStrType = "1" | "2" | "3" | "4" | "5" | "6";

export interface IDie {
  /** Number of dots on a die */
  value: DieValuesType;
  /** `true` means that player fixed this die from changes */
  active: boolean;
  /** Unique identifier, is used for `key` */
  id: string;
}

export interface DieProps {
  /** Number of dots on a die */
  value: DieValuesType;
  /** `true` means that player fixed this die from changes */
  active: boolean;
  /** Fix or unfix the corresponding die */
  activateDice: () => void;
}
