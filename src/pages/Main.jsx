import Card from "../components/Card";
import animeData from "../data/animeData.json"
import main from "../styles/main.css"
const Main = () => {
  const { animes } = animeData;
  return (
    <>
    <section className="center-section">
      <h1>Todo lo Reciente</h1>
    </section>
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

