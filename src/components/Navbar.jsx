import { useState } from "react";
import navbar from "../styles/navbar.css";
import kira from "../assets/img/kira.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const links = [
    {
      nombre: "Recientes",
      link: "/",
    },
    {
      nombre: "Destacados",
      link: "/destacados",
    },
    {
      nombre: "Catalogo",
      link: "/catalogo",
    },
    {
      nombre:"Acerca de Nosotros",
      link:"/aboutus"
    }
  ];
  const handleclic = () => setOpenNavbar(!openNavbar);

  return (
    <nav className="navbar">
      <section className="navbar__section">
        <h1 className="navbar__titulo">
          <img src={kira} alt="" id="kira" />
        </h1>
      </section>

      <button className="navbar__button cerrar" onClick={handleclic}>
        <FaBars />
      </button>

      <ul id="navbar__lista" className={`${openNavbar ? "mostrar" : ""}`}>
        <button onClick={handleclic} className="navbar__button">
          <FaTimes />
        </button>

        {links.map(({ nombre, link }) => (
          <li key={nombre}>
            <NavLink to={link}>{nombre}</NavLink>
          </li>
        ))}
        <li>
          {" "}
          <input
            type="text"
            placeholder="Buscar..."
            id="lista__busqueda"
          />{" "}
        </li>
        <li>
          <NavLink to={"/login"}>login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
