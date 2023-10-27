import footer from "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Redes Sociales</h1>
      <ul>
        <li>
          <span className="icon"><i className="fa fa-github fa-2x" aria-hidden="true"></i></span>
          <a className="text" href="https://github.com/EmmanuelBaena69" target="_blank">www.github.com/EmmanuelBaena69</a>
        </li>
        <li>
          <span className="icon"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></span>
          <a className="text" href="https://www.instagram.com/emmanuel___tesfaye/?hl=es" target="_blank">Emmanuel/Instagram</a>
        </li>
        <li>
          <span className="icon"><i className="fa fa-github fa-2x" aria-hidden="true"></i></span>
          <a className="text" href="https://github.com/JuanTB300405" target="_blank">www.github.com/Juan Manuel</a>
        </li>
        <li>
          <span className="icon"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></span>
          <a className="text" href="https://www.instagram.com/jtejadabustamante?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank">Juan Manuel/Instagram</a>
        </li>
      </ul>
      <p>&copy; 2023 animeKira.com. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;