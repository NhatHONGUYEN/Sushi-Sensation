import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./animation/fade-right.css";
import About from "./component/pages/frontpage/about/About.jsx";
import Contact from "./component/pages/frontpage/contact/Contact.jsx";
import ErrorPage from "./component/pages/error/ErrorPage.jsx";
import FrontPage from "./component/pages/frontpage/FrontPage.jsx";
import Menu from "./component/pages/frontpage/menu/Menu.jsx";
import MenuNav from "./component/pages/frontpage/navbar/menuNav/MenuNav.jsx";
import Reservation from "./component/pages/frontpage/reservation/Reservation.jsx";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade-right" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/frontpage" element={<FrontPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<About />} />
          <Route path="/menuNav" element={<MenuNav />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default App;
