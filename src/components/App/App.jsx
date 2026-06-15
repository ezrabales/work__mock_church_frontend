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
import Groups from "../Groups/Groups";
import Teams from "../Teams/Teams";

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
        <Route path="/groups" element={<Groups />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </GlobalProvider>
  );
};
export default App;
