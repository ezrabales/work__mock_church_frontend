import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [footerBackgroundColor, setFooterBackgroundColor] = useState("white");

  return (
    <GlobalContext.Provider
      value={{ footerBackgroundColor, setFooterBackgroundColor }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
