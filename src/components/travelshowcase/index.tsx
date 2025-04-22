import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface FurnitureShowcaseProps {
  language: "pt" | "en" | "fr" | "es"; // Propriedade de idioma
}

const translations = {
  pt: {
    title:
      "Transforme seus espaços com elegância.\nDescubra móveis exclusivos.\nViva com sofisticação.",
    slogan: "3X MELHOR MARCA DE MÓVEIS",
  },
  en: {
    title:
      "Transform your spaces with elegance.\nDiscover exclusive furniture.\nLive with sophistication.",
    slogan: "3X BEST FURNITURE BRAND",
  },
  fr: {
    title:
      "Transformez vos espaces avec élégance.\nDécouvrez des meubles exclusifs.\nVivez avec sophistication.",
    slogan: "3X MEILLEURE MARQUE DE MEUBLES",
  },
  es: {
    title:
      "Transforma tus espacios con elegancia.\nDescubre muebles exclusivos.\nVive con sofisticación.",
    slogan: "3X MEJOR MARCA DE MUEBLES",
  },
};

export default function FurnitureShowcase({ language }: FurnitureShowcaseProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const text = translations[language]; // Seleciona o idioma com base na prop

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (titleRef.current) {
        const spans = titleRef.current.querySelectorAll("span");

        gsap.set(spans, { y: 20, opacity: 0 });

        gsap.to(spans, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
        });
      }
    };

    loadGSAP();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 ref={titleRef}>
            {text.title.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.25em" : "auto",
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
        <div className={styles.logo}>
          {/* <hr />
          <p>{text.slogan}</p> */}
        </div>
      </div>
    </section>
  );
}