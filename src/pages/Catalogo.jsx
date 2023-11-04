import { useState } from "react";
import Card from "../components/Card";
import animeData from "../data/animeData.json";
import Slider from "../components/slider";
import styles from "../styles/filtro.css";

const Catalogo = () => {
  const { animes } = animeData;
  const [openList, setOpenList] = useState(false);
  const cambio = () => setOpenList(!openList);
  const [seleccionados, setSeleccionados] = useState([]);

  const handleChecked = (event) => {
    const { name, value, checked } = event.target;

    if (checked) {
      const seleccionadosSET = new Set([...seleccionados, value]);
      setSeleccionados([...seleccionadosSET]);
    }

    if (!checked) {
      const index = seleccionados.indexOf(value);
      if (index !== -1) {
        const newSeleccionados = [...seleccionados]
        newSeleccionados.splice(index, 1)
        setSeleccionados(newSeleccionados);
      }
    }

    console.log(seleccionados);
  };
  return (
    <>
      <Slider />
      <section className="mostrario">
        <section className="Filtro">
          <label htmlFor="Categorias" className="labels">
            {" "}
            Categorias{" "}
          </label>
          <input
            type="checkbox"
            id="Categorias"
            className="input-checkbox"
            onChange={cambio}
          />

          <ul className={`Filtro__Categorias${openList ? "mostrar" : ""}`}>
            <li>
              <label htmlFor="Romance"> Romance </label>
              <input
                name="Romance"
                type="checkbox"
                value={"Romance"}
                id="Romance"
                className="input-checkbox"
                onChange={(e) => handleChecked(e)}
              />
            </li>

            <li>
              <label htmlFor="Comedia">Comedia</label>
              <input
                name="Comedia"
                type="checkbox"
                id="Comedia"
                value={"Comedia"}
                className="input-checkbox"
                onChange={(e) => handleChecked(e)}
              />
            </li>
            <li>
              <label htmlFor="Accion"> Accion </label>
              <input
                name="Accion"
                type="checkbox"
                id="Accion"
                value={"Accion"}
                className="input-checkbox"
                onChange={(e) => handleChecked(e)}
              />
            </li>
          </ul>
        </section>

        <section className="CP">
          {openList
            ? animes
                .filter(({ categoria }) =>
                  categoria.some( cat =>seleccionados.includes(cat))
                )
                .map((elemento) => (
                  <Card key={elemento.titulo} paquete={elemento} />
                ))
            : animes.map((elemento) => (
                <Card key={elemento.titulo} paquete={elemento} />
              ))}
        </section>
      </section>
    </>
  );
};
export default Catalogo;
