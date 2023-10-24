import Card from "../components/Card";
import animeData from "../data/animeData.json";



const Catalogo = () => {
  const { animes } = animeData;
  return (
    <>
     
      <section className="CP">
        {animes.map((elemento) => (
          <Card key={elemento.titulo} paquete={elemento} />
        ))}
      </section>        
    </>
  );
};
export default Catalogo;
