import { createContext, useContext, useState } from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPodcast,
} from "react-icons/fa6";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [footerBackgroundColor, setFooterBackgroundColor] = useState("white");
  const media = [
    {
      name: "YouTube",
      href: "https://www.youtube.com",
      icon: FaYoutube,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: FaFacebookF,
    },
    {
      name: "Twitter",
      href: "https://x.com/",
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      name: "Podcast",
      href: "https://podcasts.apple.com/us",
      icon: FaPodcast,
    },
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
