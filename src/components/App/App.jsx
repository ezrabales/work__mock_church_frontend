import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalProvider } from "../GlobalState/GlobalState";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Give from "../Give/Give";
import Connect from "../Connect/Connect";
import About from "../About/About";
import LifeInChurch from "../LifeInChurch/LifeInChurch";
import PlanYourVisit from "../PlanYourVisit/PlanYourVisit";
import Beliefs from "../Beliefs/Beliefs";
import Leadership from "../Leadership/Leadership";

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
        <Route path="/connect" element={<Connect />} />
        <Route path="/about" element={<About />} />
        <Route path="/lifeInChurch" element={<LifeInChurch />} />
        <Route path="/planYourVisit" element={<PlanYourVisit />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
      <Footer />
    </GlobalProvider>
  );
};
export default App;
