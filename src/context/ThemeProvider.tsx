import { createContext, useState, ReactNode, useContext } from "react";
import { useAppSelector } from "../redux/store/store";

interface SearchContextProps {
  darkModeIsOn: string;
  handleToggleThemeMode: () => void;
}

type SearchProvider = { children: ReactNode };

const defaultSearchValues: SearchContextProps = {
  darkModeIsOn: "dark",
  handleToggleThemeMode: () => {}
};

const ThemeContext = createContext<SearchContextProps>(defaultSearchValues);

const ThemeProvider = ({ children }: SearchProvider) => {
  const { isOpen } = useAppSelector(state => state.search);

  return (
    <ThemeContext.Provider value={{ darkModeIsOn, handleToggleThemeMode }}>
      <section className={` custom-container`}>{children}</section>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
