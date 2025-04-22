import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export default function Services() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cardRefs.current.forEach((card) => {
        if (card && card.matches(":hover")) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          const deltaX = event.clientX - cardCenterX;
          const deltaY = event.clientY - cardCenterY;

          const rotateX = -(deltaY / 10); // Adjust sensitivity here
          const rotateY = deltaX / 10;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          card.style.transition = `transform 0.1s ease-out`; // Smooth transition during mouse movement
        }
      });
    };

    const resetRotation = () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
          card.style.transition = `transform 1s ease`; // Smooth transition on mouse leave
        }
      });
    };

    cardRefs.current.forEach((card) => {
      if (card) {
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", resetRotation);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", resetRotation);
        }
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Nossos Serviços</h3>
          <p>Abaixo estão alguns serviços que prestamos na nossa empresa!</p>
        </div>
        <div className={styles.cardWrap}>
          <div
            className={styles.card}
            style={{ backgroundImage: 'url("/plane.jpg")' }}
            ref={(el) => {
              if (el) cardRefs.current[0] = el;
            }}
          >
            <div className={styles.overlay}>
              <img src="/arrowWhite.svg" alt="" />
              <h4>Passagens Aéreas</h4>
              <p>
                Oferecemos as melhores tarifas para voos nacionais e
                internacionais.
              </p>
              <p>Clique para saber mais!</p>
            </div>
          </div>
          <div
            className={styles.card}
            style={{ backgroundImage: 'url("/hotel.jpg")' }}
            ref={(el) => {
              if (el) cardRefs.current[1] = el;
            }}
          >
            <div className={styles.overlay}>
              <img src="/arrowWhite.svg" alt="" />
              <h4>Orçamento de Hospedagens</h4>
              <p>
                Encontre as melhores opções de hospedagem ao redor do mundo.
              </p>
              <p>Clique para saber mais!</p>
            </div>
          </div>
          <div
            className={styles.card}
            style={{ backgroundImage: 'url("/car.jpg")' }}
            ref={(el) => {
              if (el) cardRefs.current[2] = el;
            }}
          >
            <div className={styles.overlay}>
              <img src="/arrowWhite.svg" alt="" />
              <h4>Aluguel de Carros</h4>
              <p>
                Reserve veículos para sua viagem com facilidade e segurança.
              </p>
              <p>Clique para saber mais!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
