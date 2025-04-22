import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const ScrollProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verifica se o código está rodando no cliente
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.to(progressBarRef.current, {
            height: "100%", // A barra irá preencher a altura da página
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true, // Sincroniza a animação com a rolagem
            },
          });
        });
      });
    }
  }, []);

  return <div className={styles.progressBar} ref={progressBarRef} />;
};

export default ScrollProgressBar;
