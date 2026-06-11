import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalProvider } from "../GlobalState/GlobalState";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Give from "../Give/Give";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/give" element={<Give />} />
      </Routes>
      <Footer />
    </GlobalProvider>
  );
};
export default App;
