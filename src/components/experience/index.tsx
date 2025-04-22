import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface ExperienceProps {
  language: "pt" | "en" | "fr" | "es"; // Propriedade de idioma
}

export default function Experience({ language }: ExperienceProps) {
  const ballRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const translations = {
    pt: {
      header:
        "Somos uma empresa comprometida em transformar seus espaços com design exclusivo e qualidade premium",
      experienceText: "120+ projetos realizados",
      experienceDescription:
        "Já criamos mais de 120 ambientes personalizados em todo o país",
      infoCard1: "clientes satisfeitos em todo o Brasil.",
      infoCard2: "materiais premium disponíveis.",
      infoCard3: "designers especializados.",
    },
    en: {
      header:
        "We are a company committed to transforming your spaces with exclusive design and premium quality",
      experienceText: "120+ completed projects",
      experienceDescription:
        "We've created over 120 customized spaces across the country",
      infoCard1: "satisfied customers nationwide.",
      infoCard2: "premium materials available.",
      infoCard3: "specialized designers.",
    },
    fr: {
      header:
        "Nous sommes une entreprise engagée à transformer vos espaces avec un design exclusif et une qualité premium",
      experienceText: "120+ projets réalisés",
      experienceDescription:
        "Nous avons créé plus de 120 espaces personnalisés à travers le pays",
      infoCard1: "clients satisfaits dans tout le pays.",
      infoCard2: "matériaux premium disponibles.",
      infoCard3: "designers spécialisés.",
    },
    es: {
      header:
        "Somos una empresa comprometida en transformar tus espacios con diseño exclusivo y calidad premium",
      experienceText: "120+ proyectos realizados",
      experienceDescription:
        "Hemos creado más de 120 espacios personalizados en todo el país",
      infoCard1: "clientes satisfechos en todo el país.",
      infoCard2: "materiales premium disponibles.",
      infoCard3: "diseñadores especializados.",
    },
  };

  const text = translations[language]; // Escolhe o idioma com base na prop

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (textRef.current) {
        const spans = textRef.current.querySelectorAll("span");

        gsap.set(spans, { y: 20, opacity: 0 });

        gsap.to(spans, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "easeOut",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 100%",
            end: "top 50%",
            scrub: true,
          },
        });
      }

      // Fade-in effect for info cards
      const infoCardElements = document.querySelectorAll(`.${styles.infoCard}`);
      infoCardElements.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
              once: true,
            },
          }
        );
      });
    };

    loadGSAP();

    // Handle mouse movement for the ball animation
    const handleMouseMove = (event: MouseEvent) => {
      if (ballRef.current) {
        const ball = ballRef.current;
        const rect = ball.getBoundingClientRect();
        const ballCenterX = rect.left + rect.width / 2;
        const ballCenterY = rect.top + rect.height / 2;

        const deltaX = event.clientX - ballCenterX;
        const deltaY = event.clientY - ballCenterY;

        const rotateX = -(deltaY / 5);
        const rotateY = deltaX / 5;

        ball.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        ball.style.transition = `transform 0.1s ease-out`;
      }
    };

    const resetRotation = () => {
      if (ballRef.current) {
        ballRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        ballRef.current.style.transition = `transform 1s ease`;
      }
    };

    const ball = ballRef.current;

    if (ball) {
      ball.addEventListener("mousemove", handleMouseMove);
      ball.addEventListener("mouseleave", resetRotation);
    }

    return () => {
      if (ball) {
        ball.removeEventListener("mousemove", handleMouseMove);
        ball.removeEventListener("mouseleave", resetRotation);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.leftside}>
            <h2 ref={textRef}>
              {text.header.split("").map((char, index) => (
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
            </h2>
          </div>
          <div className={styles.rightside}>
            <div className={styles.ball} ref={ballRef}>
              <div className={styles.text}>
                <h3>120</h3>
                <span>+</span>
              </div>
            </div>
            <div className={styles.experienceText}>
              <span>{text.experienceText}</span>
              <p>{text.experienceDescription}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.infoCard}>
            <p>
              <strong>350+</strong> {text.infoCard1}
            </p>
            <img src="/happy.svg" alt="Clientes felizes" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>25+</strong> {text.infoCard2}
            </p>
            <img src="/construcao.svg" alt="Materiais premium" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>50+</strong> {text.infoCard3}
            </p>
            <img src="/caneta.svg" alt="Designers especializados" />
          </div>
        </div>
      </div>
    </div>
  );
}