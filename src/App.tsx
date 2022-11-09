// React
import { useEffect } from "react";

// Components
import Die from "./components/Die";
import Confetti from "react-confetti";
import ToggleSwitch from "./components/ToggleSwitch";

// Miscellaneous
import Icons from "./styles/Icons";
import useDice from "./hooks/useDice";
import useStats from "./hooks/useStats";
import useTenzies from "./hooks/useTenzies";
import useDarkMode from "./hooks/useDarkMode";
import useWindowSize from "./hooks/useWindowSize";
import { generateNewDie, allNewDice } from "./utils/generateDies";

// styled-components
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";
import {
  StyledH1,
  StyledButton,
  StyledPlayZone,
  StyledGameInfo,
  StyledContainer,
  StyledStatHeader,
  StyledDescription,
  StyledDieContainer,
  StyledTextHighlight,
  StyledContainerItem,
  StyledNumberHighlight,
} from "./App.styled";

export default function App({ hideLoader }: any) {
  useEffect(hideLoader, []);

  const windowSize = useWindowSize();
  const [stats, setStats] = useStats();
  const [tenzies, setTenzies] = useTenzies();
  const [dice, setDice, activateDice] = useDice();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    // Condition is true only in case of victory
    if (!tenzies && dice.every((die) => die.active && die.value === dice[0].value)) {
      setStats((prev) => {
        return {
          ...prev,
          victories: prev.victories + 1,
          minRolls: Math.min(prev.minRolls ?? Infinity, prev.rollsNumber),
        };
      });
      setTenzies(true);
    }
  }, [dice]);

  function rollDice(): void {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.active ? die : generateNewDie();
        })
      );
      setStats((prev) => ({
        ...prev,
        rollsNumber: prev.rollsNumber + 1,
      }));
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setStats((prev) => ({
        ...prev,
        rollsNumber: 0,
      }));
    }
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {tenzies && (
        <Confetti
          style={{ zIndex: -1 }}
          recycle={false}
          numberOfPieces={1000}
          width={windowSize.width}
          height={windowSize.height}
        />
      )}
      <StyledH1>Tenzies</StyledH1>
      <StyledDescription>
        Roll until <StyledTextHighlight>all dice are the same</StyledTextHighlight>. Click each die
        {/* */} <StyledTextHighlight>to freeze it</StyledTextHighlight> at its current value between
        rolls.
      </StyledDescription>
      <StyledPlayZone>
        <StyledDieContainer>
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              active={die.active}
              activateDice={() => activateDice(die.id)}
            />
          ))}
        </StyledDieContainer>
        {tenzies && (
          <StyledGameInfo>
            {Icons.crown}
            <span>You have won!</span>
            {Icons.crown}
          </StyledGameInfo>
        )}
        <StyledGameInfo>
          <StyledNumberHighlight>{stats.rollsNumber}</StyledNumberHighlight>
          <span>rolls</span>
        </StyledGameInfo>
      </StyledPlayZone>
      <StyledButton onClick={rollDice}>
        {!tenzies && (
          <>
            <span>Roll</span>
            {Icons.roll_24px}
          </>
        )}
        {tenzies && (
          <>
            <span>New game</span>
            {Icons.play_24px}
          </>
        )}
      </StyledButton>
      <StyledContainer>
        <StyledStatHeader>Stats</StyledStatHeader>
        <StyledContainerItem>
          <p>Victories</p>
          <p>{stats.victories}</p>
        </StyledContainerItem>
        <StyledContainerItem>
          <p>Min Rolls</p>
          <p>{stats.minRolls ?? "-"}</p>
        </StyledContainerItem>
      </StyledContainer>
      <StyledContainer>
        <StyledContainerItem>
          <p>Dark Mode</p>
          <ToggleSwitch checkedHanlder={isDarkMode} onChangeHandler={toggleDarkMode} />
        </StyledContainerItem>
      </StyledContainer>
    </ThemeProvider>
  );
}
