import styles from "./styles.module.scss";

interface BannerProps {
  language: "pt" | "en" | "fr" | "es"; // Propriedade de idioma
}

export default function Banner({ language }: BannerProps) {
  // Textos traduzidos para mobiliária
  const translations = {
    pt: {
      title1: "MOBILI",
      title2: "ELEGANTE",
      description: "Criamos os melhores móveis com design exclusivo e qualidade premium!",
      buttonText: "Solicitar catálogo!",
      rightBoxTitle: "Transforme seu espaço!",
      rightBoxDescription: "Agende uma consultoria gratuita com nossos designers!",
    },
    en: {
      title1: "FURNITURE",
      title2: "ELEGANCE",
      description: "We craft premium furniture with exclusive designs and unmatched quality!",
      buttonText: "Request catalog!",
      rightBoxTitle: "Transform your space!",
      rightBoxDescription: "Schedule a free consultation with our designers!",
    },
    fr: {
      title1: "MOBILIER",
      title2: "ÉLÉGANT",
      description: "Nous créons des meubles haut de gamme avec des designs exclusifs!",
      buttonText: "Demander le catalogue!",
      rightBoxTitle: "Transformez votre espace!",
      rightBoxDescription: "Planifiez une consultation gratuite avec nos designers!",
    },
    es: {
      title1: "MUEBLES",
      title2: "ELEGANTES",
      description: "¡Creamos muebles premium con diseños exclusivos y calidad excepcional!",
      buttonText: "¡Solicitar catálogo!",
      rightBoxTitle: "¡Transforma tu espacio!",
      rightBoxDescription: "¡Agenda una consulta gratuita con nuestros diseñadores!",
    },
  };

  // Seleciona o texto de acordo com o idioma
  const text = translations[language];

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.leftSide}>
          <div className={styles.leftLines}>
            <div className={styles.title}>
              <h1>{text.title1}</h1>
              <h2>{text.title2}</h2>
              <div className={styles.description}>
                <p>
                  {text.description.split("").map((char, index) => (
                    <span
                      key={index}
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        display: char === " " ? "inline-block" : "inline",
                        width: char === " " ? "0.25em" : "auto",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/message/AVAYUU2HYYIOJ1",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="/button2.svg"
                    alt="ButtonArrow"
                    className={styles.arrow}
                  />
                  {text.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.rightBox}>
            <img src="/arrow.svg" alt="Arrow" />
            <h2>{text.rightBoxTitle}</h2>
            <p>{text.rightBoxDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}