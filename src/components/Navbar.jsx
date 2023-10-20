import { useState } from "react";
import navbar from "../styles/navbar.css";
import kira from "../assets/img/kira.png";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleclic = () => setOpenNavbar(!openNavbar);

  return (
    <nav className="navbar">
      <section className="navbar__section">
        <h1 className="navbar__titulo">
          <img src={kira} alt="" id="kira" />
        </h1>
      </section>

      <button id="navbar__button" onClick={handleclic}>
        <>{openNavbar ? <p>cerrar</p> : <p>abrir</p>}</>
      </button>

      <ul id="navbar__lista" className={`${openNavbar ? "mostrar" : null}`}>
        <li>
          <a href="" className="lista__link">
            INICIO
          </a>
        </li>
        <li>
          <a href="/clase-2/directorio.html" className="lista__link">
            DIRECTORIO DE ANIME
          </a>
        </li>
        <li>
          {" "}
          <input
            type="text"
            placeholder="Buscar..."
            id="lista__busqueda"
          />{" "}
        </li>
        <li>
          <a href="" className="lista__link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
