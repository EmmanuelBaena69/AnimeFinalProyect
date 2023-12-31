import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./styles/style.css";
import Main from "./pages/Main";
import PublicLayout from "./layouts/PublicLayout";
import Destacados from "./pages/Destacados"
import Catalogo from "./pages/Catalogo"
import Login from "./pages/Login"
import AboutUs from "./pages/AboutUs"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Main />} />
          <Route path="destacados" element={<Destacados />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="login" element={<Login />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
