import styles from "../styles/card.css";

const Card = ({ paquete }) => {
  return (
    <section className="CM">
      <article className="CM__Art">
        <figure>
          <img src={paquete.img} alt="" className="Art__Img" />
        </figure>
        <main className="Art__Main">
          <h1>{paquete.titulo}</h1>
          <p>temporada: {paquete.temporada}</p>
          <p>capitulos: {paquete.capitulos}</p>
        </main>
      </article>
    </section>
  );
};
export default Card;
//const {paquete}=props
