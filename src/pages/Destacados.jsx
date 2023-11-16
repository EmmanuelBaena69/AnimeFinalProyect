import animeData from "../data/animeData.json";
import style from "../styles/destacados.css";

const Destacados = () => {
    const { animes } = animeData;

    const animesDestacados = animes.sort((a, b) => b.likes - a.likes);

    return (
        <section className="destacados">
            <h2 className="destacados__titulo">Animes Destacados</h2>
            <ul className="destacados__lista">
                {animesDestacados.map((anime) => (
                    <li key={anime.titulo} className="destacados__item">
                        <img src={anime.img} alt="" />
                        {anime.titulo} - Likes: {anime.likes}
                        <p>temporada: {anime.temporada}</p>
                        <p>capitulos: {anime.capitulos}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default Destacados;