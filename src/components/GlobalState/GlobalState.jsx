import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [footerBackgroundColor, setFooterBackgroundColor] = useState("white");
  const media = [
    { name: "YouTube", href: "https://www.youtube.com" },
    { name: "FaceBook", href: "https://www.facebook.com/" },
    { name: "Twitter", href: "https://x.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Podcast", href: "https://podcasts.apple.com/us" },
  ];

  return (
    <GlobalContext.Provider
      value={{ media, footerBackgroundColor, setFooterBackgroundColor }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
