const colors = {
  white: "#FFFFFF",
  grayishWhite: "#F5F5F5",
  darkGreen: "#59E391",
  gold: "#F19D43",
  violet: "#4457FF",
  gray: "#BFBFBF",
  black: "#0B2434",
};

export const lightTheme = {
  pageBackground: colors.grayishWhite,
  cardBackground: colors.white,
  buttonBackground: colors.violet,
  text: colors.black,
  activeDie: colors.darkGreen,
  inactiveDie: colors.black,
  crown: colors.gold,
  buttonText: colors.grayishWhite,
  statsValues: colors.violet,
  gray: colors.gray,
  highlight: colors.violet,
  highlightTextInside: colors.white,
  inactiveToggleSwitch: colors.gray,
  activeToggleSwitch: colors.darkGreen,
  diceBackground: "transparent",
  isDarkMode: false,
};

export const darkTheme = {
  pageBackground: colors.black,
  cardBackground: colors.violet,
  buttonBackground: colors.violet,
  text: colors.white,
  activeDie: colors.darkGreen,
  inactiveDie: colors.white,
  crown: colors.gold,
  buttonText: colors.grayishWhite,
  statsValues: colors.darkGreen,
  gray: colors.gray,
  highlight: colors.darkGreen,
  highlightTextInside: colors.black,
  inactiveToggleSwitch: colors.gray,
  activeToggleSwitch: colors.darkGreen,
  diceBackground: colors.black,
  isDarkMode: true,
};

export type LightThemeProps = {
  theme: typeof lightTheme;
};

export type DarkThemeProps = {
  theme: typeof darkTheme;
};
