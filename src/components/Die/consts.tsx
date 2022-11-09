import Icons from "../../styles/Icons";

interface MappingType {
  [value: string]: {
    active: JSX.Element;
    inactive: JSX.Element;
    inactiveDark: JSX.Element;
  };
}

export const MAPPING: MappingType = {
  "1": {
    active: Icons.diceOneActive_48px,
    inactive: Icons.diceOneInactive_48px,
    inactiveDark: Icons.diceOneInactiveDark_48px,
  },
  "2": {
    active: Icons.diceTwoActive_48px,
    inactive: Icons.diceTwoInactive_48px,
    inactiveDark: Icons.diceTwoInactiveDark_48px,
  },
  "3": {
    active: Icons.diceThreeActive_48px,
    inactive: Icons.diceThreeInactive_48px,
    inactiveDark: Icons.diceThreeInactiveDark_48px,
  },
  "4": {
    active: Icons.diceFourActive_48px,
    inactive: Icons.diceFourInactive_48px,
    inactiveDark: Icons.diceFourInactiveDark_48px,
  },
  "5": {
    active: Icons.diceFiveActive_48px,
    inactive: Icons.diceFiveInactive_48px,
    inactiveDark: Icons.diceFiveInactiveDark_48px,
  },
  "6": {
    active: Icons.diceSixActive_48px,
    inactive: Icons.diceSixInactive_48px,
    inactiveDark: Icons.diceSixInactiveDark_48px,
  },
};
