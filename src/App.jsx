import { Route, Routes } from "react-router-dom";
import "./App.css";
import FrontPage from "./component/pages/frontpage/FrontPage.jsx";
import ErrorPage from "./component/pages/error/ErrorPage.jsx";
import Menu from "./component/pages/frontpage/menu/Menu.jsx";
import Reservation from "./component/pages/frontpage/reservation/Reservation.jsx";
import About from "./component/pages/frontpage/about/About.jsx";
import MenuNav from "./component/pages/frontpage/navbar/menuNav/MenuNav.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/frontpage" element={<FrontPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/about" element={<About />} />
      <Route path="/menuNav" element={<MenuNav />} />
    </Routes>
  );
}

export default App;
