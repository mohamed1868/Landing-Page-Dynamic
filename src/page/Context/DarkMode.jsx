import { createContext, useState } from "react";

export const contextDarkMode = createContext(0);

export default function DarkModeContextComponent(props) {
  const [dark, setDark] = useState(true);
  const darkMode = () => {
    setDark(false);
  };
  const lightMode = () => {
    setDark(true);
  };

  return (
    <contextDarkMode.Provider value={{ dark, darkMode, lightMode }}>
      {props.children}
    </contextDarkMode.Provider>
  );
}
