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
    const { value, checked } = event.target;

    if (checked) {
      const seleccionadosSET = new Set([...seleccionados, value]);
      setSeleccionados([...seleccionadosSET]);
    }

    if (!checked) {
      const index = seleccionados.indexOf(value);
      if (index !== -1) {
        const newSeleccionados = [...seleccionados];
        newSeleccionados.splice(index, 1);
        setSeleccionados(newSeleccionados);
      }
    }

    console.log(seleccionados);
  };
  return (
  );
};
export default Catalogo;
