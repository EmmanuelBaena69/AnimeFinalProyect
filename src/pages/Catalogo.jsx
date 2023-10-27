import Card from "../components/Card";
import animeData from "../data/animeData.json";



const Catalogo = () => {
  const { animes } = animeData;
  return (
    <>

      <section className="CP">
        {animes.map((elemento) => (
          <div key={elemento.titulo} className="catalogo-item">
            <Card paquete={elemento} />
            <div className="button-container">
              <button className="button">Like</button>
              <button className="button">Dislike</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Catalogo;
