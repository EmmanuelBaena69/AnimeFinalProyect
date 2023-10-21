import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./styles/style.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import PublicLayout from "./layouts/PublicLayout";
import Destacados from "./pages/Destacados"
import Catalogo from "./pages/Catalogo"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="" element={<Main />} />
            <Route path="destacados" element={<Destacados />}/>
            <Route path="catalogo" element={<Catalogo />}/>
            <Route path="login" element={<Login />}/>
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
