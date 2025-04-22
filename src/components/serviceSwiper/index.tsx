"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import styles from "./styles.module.scss";

const BairrosSlider = () => {
  const slides = [
    {
      id: 1,
      category: "sala",
      title: "Sofás Premium",
      description: "Sofás em couro e tecido com design ergonômico e exclusivo, fabricados sob medida para seu espaço.",
      image: "/plane.jpg", // Mantido igual (substituir depois)
    },
    {
      id: 2,
      category: "sala",
      title: "Conjuntos de Sala",
      description: "Conjuntos completos com sofá, poltronas e mesa de centro em perfeita harmonia.",
      image: "/hospedagem.jpg", // Mantido igual (substituir depois)
    },
    {
      id: 3,
      category: "novos",
      title: "Camas King Size",
      description: "Camas premium em madeira maciça com cabeceiras estofadas e colchões de alta qualidade.",
      image: "/chip.jpg", // Mantido igual (substituir depois)
    },
    {
      id: 4,
      category: "quarto",
      title: "Guarda-Roupas",
      description: "Guarda-roupas planejados com sistemas organizacionais inteligentes e materiais duráveis.",
      image: "/seguro.jpg", // Mantido igual (substituir depois)
    },
    {
      id: 5,
      category: "cozinha",
      title: "Cozinhas Planejadas",
      description: "Projetos completos de cozinha com ilhas, armários e eletrodomésticos integrados.",
      image: "/car.jpg", // Mantido igual (substituir depois)
    },
    {
      id: 6,
      category: "escritório",
      title: "Mesas Executivas",
      description: "Mesas em madeira nobre com designs modernos e funcionais para seu home office.",
      image: "/passport.jpeg", // Mantido igual (substituir depois)
    },
    {
      id: 7,
      category: "destaques",
      title: "Estações de Trabalho",
      description: "Conjuntos completos para home office com ergonomia e estilo premium.",
      image: "/visto.png", // Mantido igual (substituir depois)
    },
    {
      id: 8,
      category: "sala",
      title: "Móveis de TV",
      description: "Painéis e racks para TV com designs modernos e amplo espaço de armazenamento.",
      image: "/europa2.jpg", // Mantido igual (substituir depois)
    },
    {
      id: 9,
      category: "quarto",
      title: "Cômodas e Criados-Mudos",
      description: "Peças complementares com acabamento impecável e detalhes em metais nobres.",
      image: "/0.jpeg", // Mantido igual (substituir depois)
    },
  ];

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  return (
    <div className={styles["bairros-slider"]}>
      <div className={styles.content}>
        <h2>Nossos Serviços</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 3 },
            480: { slidesPerView: 1 },
          }}
          className={`${styles["swiper-container"]} custom-swiper`}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                key={slide.id}
                className={`${styles.item} ${
                  selectedCategory !== "todos" &&
                  selectedCategory !== slide.title
                    ? styles.hidden
                    : ""
                }`}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                onClick={() => {
                  const message = `Gostaria de saber mais sobre ${slide.title}`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(
                    `https://wa.me/5581991192880?text=${encodedMessage}`,
                    "_blank"
                  );
                }}
              >
                <img src={slide.image} alt={slide.title} />
                <div className={styles.overlay}>
                  <h5>{slide.title}</h5>
                  <p className={styles.description}>{slide.description}</p>
                  <img
                    src="/arrowWhite.svg"
                    alt="Arrow"
                    className={styles.arrow}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BairrosSlider;
