import { useState, useEffect } from "react";

interface IUseTenzies {
  /** If true, the game is won. Otherwise the game hasn't ended yet. */
  tenzies: boolean;
  /** Setter for tenzies */
  setTenzies: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useTenzies(): IUseTenzies {
  const [tenzies, setTenzies] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("tenzies") ?? "null") ?? false
  );

  useEffect(() => {
    localStorage.setItem("tenzies", JSON.stringify(tenzies));
  }, [tenzies]);

  return { tenzies, setTenzies };
}
