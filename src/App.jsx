import { Route, Routes } from "react-router-dom";
import "./App.css";
import FrontPage from "./component/pages/frontpage/FrontPage.jsx";
import ErrorPage from "./component/pages/error/ErrorPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/frontpage" element={<FrontPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
