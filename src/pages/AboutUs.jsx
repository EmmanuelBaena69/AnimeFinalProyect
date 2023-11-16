import styles from "../styles/AboutUs.css"

const AboutUs = () => {
    return (
        <section className="Mision">
            <section className="Mision__Imagen">
                <img src="src/assets/img/aaabb.jpeg" alt="animiePortada" />
                <h1 className="Mision__Title">Sobre Nosotros</h1>
            </section>
            <strong>Misión:</strong>
            <article className="Mision__Article">
                <p className="Article__Parrafo">  Brindamos a los fans del anime un espacio en línea para explorar, disfrutar y conectarse con la cultura del anime. Somos la fuente líder de información,
                    entretenimiento y comunidad para amantes del anime en todo el mundo. Ofrecemos contenido de alta calidad, reseñas, noticias y un foro activo para compartir pasiones y conectar con otros fans. Nuestro compromiso es
                    crear un ambiente inclusivo y respetuoso para todos los seguidores del anime.</p>
                <strong>Vision:</strong>
                <p className="Article__Parrafo"> Ser reconocidos como el principal referente en el mundo del anime, siendo el destino confiable para todo lo relacionado con esta apasionante cultura. Nos esforzamos
                    por proporcionar a los fans del anime una experiencia única y enriquecedora, permitiéndoles disfrutar al máximo de su afición. Buscamos expandir nuestra presencia global, conectando a personas de
                    diversas culturas a través de nuestra plataforma. Aspiramos a ser líderes innovadores, introduciendo nuevas formas de explorar y disfrutar del vasto universo del anime. En nuestra visión, vemos una
                    comunidad vibrante y diversa, unida por el amor compartido hacia el anime, y trabajamos constantemente para hacer realidad esa visión.</p>
            </article>
        </section>
    )
}
export default AboutUs;
