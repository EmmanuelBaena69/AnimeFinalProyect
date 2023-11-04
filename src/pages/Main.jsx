import Card from "../components/Card";
import animeData from "../data/animeData.json"
import Slider from "../components/slider"
import main from "../styles/main.css"

const Main = () => {
  const { animes } = animeData;
  return (
    <>
    <section className="center-section">
    </section>
    <Slider />
      <section className="CP">
        {animes
          .filter(elemento => elemento.estado === "Reciente")
          .map(elemento => (
            <Card key={elemento.titulo} paquete={elemento} />
          ))}
      </section>
    </>
  );
};
export default Main;

