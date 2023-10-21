import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navbar from "../styles/navbar.css";
import img from "../assets/img/kira.png";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
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
            type="text"
            placeholder="Buscar..."
            id="lista__busqueda"
          />{" "}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Navbar;
