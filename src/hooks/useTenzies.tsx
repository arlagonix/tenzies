import { useState, useEffect } from "react";

export default function useTenzies(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [tenzies, setTenzies] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("tenzies") ?? "null") ?? false
  );

  useEffect(() => {
    localStorage.setItem("tenzies", JSON.stringify(tenzies));
  }, [tenzies]);

  return [tenzies, setTenzies];
}
