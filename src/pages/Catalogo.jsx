import Card from "../components/Card";
import animeData from "../data/animeData.json";
import Slider from "../components/slider"



const Catalogo = () => {
  const { animes } = animeData;
  return (
    <>
      <Slider />  
      <section className="CP">
        {animes.map((elemento) => (
          <Card key={elemento.titulo} paquete={elemento} />
        ))}
      </section>        
    </>
  );
};
export default Catalogo;
