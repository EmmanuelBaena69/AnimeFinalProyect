<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
>>>>>>> 71461229cabf8307379befbef772f94d55f4d786
import navbar from "../styles/navbar.css";
import kira from "../assets/img/kira.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
<<<<<<< HEAD
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
=======

  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para controlar el menú

    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen)
>>>>>>> 71461229cabf8307379befbef772f94d55f4d786
    }
  ];
  const handleclic = () => setOpenNavbar(!openNavbar);

  return (
<<<<<<< HEAD
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
=======
    
    <header>
      <h3 className="logo">
        <img src={img} alt="Logo" style={{ width: '150px' }} />
      </h3>
      <nav ref={navRef}>
        <a href="#">Reciente</a>
        <a href="#">Populares</a>
        <a href="#">Catalogo</a>
        <a href="#">Sobre nosotros</a>
        <input
>>>>>>> 71461229cabf8307379befbef772f94d55f4d786
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
