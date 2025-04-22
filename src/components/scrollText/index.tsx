import React from "react";
import styles from "./styles.module.scss";

interface ScrollTextProps {
  language: "pt" | "en" | "fr" | "es"; // Propriedade de idioma
}

const translations = {
  pt: {
    companyName: "MOBILI ELEGANTE",
    slogan: "A MELHOR MARCA DE MÓVEIS",
  },
  en: {
    companyName: "ELEGANT FURNITURE",
    slogan: "THE BEST FURNITURE BRAND",
  },
  fr: {
    companyName: "MOBILIER ÉLÉGANT",
    slogan: "LA MEILLEURE MARQUE DE MEUBLES",
  },
  es: {
    companyName: "MUEBLES ELEGANTES",
    slogan: "LA MEJOR MARCA DE MUEBLES",
  },
};

export default function ScrollText({ language }: ScrollTextProps) {
  const text = translations[language]; // Seleciona o idioma com base na prop

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {[...Array(15)].map((_, index) => (
          <React.Fragment key={index}>
            <div className={styles.slide}>
              <div className={styles.textContainer}>
                <img src="/design.svg" alt="Ícone" className={styles.icon} />
                <span className={styles.companyName}>{text.companyName}</span>
                <img src="/design.svg" alt="Ícone" className={styles.icon} />
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.textContainer}>
                <span className={styles.slogan}>{text.slogan}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}