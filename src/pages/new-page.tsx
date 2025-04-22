import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types"; // Import Swiper types

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore

import Header from "@/components/header";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCube,
  EffectFade,
  Navigation,
  EffectCoverflow,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import styles from "../styles/new-page.module.scss";
import QuemSomos from "@/components/quemsomos";
import World from "@/components/world";
import CardSection from "@/components/cardsection";
import Footer2 from "@/components/footer2";
import { title } from "process";

export default function NewPage() {
  const slides = [
    {
      title: "Ásia",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/images/bali2.jpg",
      pageBackground: "/images/bali2.jpg",
      childSlides: [
        {
          image: "/tailandia/1.jpg",
          title: "Tailândia",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/images/tokyo.jpg",
          title: "Japão",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/images/china.jpg",
          title: "China",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
        {
          image: "/images/korea.jpg",
          title: "Coreia do Sul",
          description:
            "A península está a 15 minutos de barco de Ao Nang, província de Krabi. ",
        },
      ],
      childSwiperProps: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    {
      title: "América do Norte",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/images/bali2.jpg",
      pageBackground: "/images/bali2.jpg",
      childSlides: [
        {
          image: "/images/new-york.jpg",
          title: "Estados Unidos",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/images/canada.jpg",
          title: "Canadá",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/images/mexico.jpg",
          title: "Mexico",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
        {
          image: "/images/new-york.jpg",
          title: "Estados Unidos",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/images/canada.jpg",
          title: "Canadá",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/images/mexico.jpg",
          title: "Mexico",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
      ],
      childSwiperProps: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    {
      title: "América do Sul",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/images/bali2.jpg",
      pageBackground: "/images/bali2.jpg",
      childSlides: [
        {
          image: "/images/brasil.jpg",
          title: "Brasil",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/images/argentina.jpg",
          title: "Argentina",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/images/colombia.jpg",
          title: "Colombia",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
        {
          image: "/images/chile.jpg",
          title: "Chile",
          description:
            "A península está a 15 minutos de barco de Ao Nang, província de Krabi. ",
        },
      ],
      childSwiperProps: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    {
      title: "África",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/images/bali2.jpg",
      pageBackground: "/images/bali2.jpg",
      childSlides: [
        {
          image: "/tailandia/1.jpg",
          title: "Koh Phi Phi",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/tailandia/2.jpg",
          title: "Bangkok",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/tailandia/3.jpg",
          title: "Chiang Mai",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
        {
          image: "/tailandia/1.jpg",
          title: "Railay Beach",
          description:
            "A península está a 15 minutos de barco de Ao Nang, província de Krabi. ",
        },
      ],
      childSwiperProps: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    {
      title: "Oriente Médio",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/images/bali2.jpg",
      pageBackground: "/images/bali2.jpg",
      childSlides: [
        {
          image: "/tailandia/1.jpg",
          title: "Koh Phi Phi",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/tailandia/2.jpg",
          title: "Bangkok",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/tailandia/3.jpg",
          title: "Chiang Mai",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
        {
          image: "/tailandia/1.jpg",
          title: "Railay Beach",
          description:
            "A península está a 15 minutos de barco de Ao Nang, província de Krabi. ",
        },
      ],
      childSwiperProps: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    {
      title: "Oceania",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/images/bali2.jpg",
      pageBackground: "/images/bali2.jpg",
      childSlides: [
        {
          image: "/tailandia/1.jpg",
          title: "Koh Phi Phi",
          description:
            "É a ilha dos sonhos. Com praias de água azul-turquesa e muita badalação",
        },
        {
          image: "/tailandia/2.jpg",
          title: "Bangkok",
          description:
            "Sinônimo de multidão, feiras, trânsito, comida de rua, tuk-tuk e muito calor.",
        },
        {
          image: "/tailandia/3.jpg",
          title: "Chiang Mai",
          description:
            "Me surpreendeu com sua calmaria, temperatura (menos calor que a capital) e com templos lindíssimos.",
        },
        {
          image: "/tailandia/1.jpg",
          title: "Railay Beach",
          description:
            "A península está a 15 minutos de barco de Ao Nang, província de Krabi. ",
        },
      ],
      childSwiperProps: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  ];

  const [childActiveIndices, setChildActiveIndices] = useState<number[]>(
    slides.map(() => 0)
  );

  const mainSwiperRef = useRef<SwiperType | null>(null);
  const childSwiperRefs = useRef<SwiperType[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  type Language = "pt" | "en" | "fr" | "es";
  const experienceRef = useRef(null);
  const stepsRef = useRef(null);
  const productsRef = useRef(null);
  const travelShowcaseRef = useRef(null);

  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [language, setLanguage] = useState<Language>("pt");

  const [timeLeft, setTimeLeft] = useState(0);
  const autoplayDelay = 5000;
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : autoplayDelay / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        language={language}
        setLanguage={setLanguage}
      />

      <Swiper
        modules={[EffectCube, Navigation, Pagination, A11y, Autoplay]}
        effect="cube"
        direction="vertical"
        grabCursor={true}
        cubeEffect={{ shadow: false }}
        loop={true}
        autoplay={{ delay: 25000, disableOnInteraction: false }}
        speed={500}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
          setTimeLeft(autoplayDelay / 1000);
        }}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        className={styles.mainSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.container}
              style={{
                backgroundImage: `url(${
                  slide.childSlides[childActiveIndices[index]].image
                })`,
                transition: "background-image 1s ease-in-out",
              }}
            >
              <div className={styles.content}>
                <h1
                  data-swiper-animation="animate__fadeIn"
                  data-duration="0.6s"
                >
                  {slide.childSlides[childActiveIndices[index]].title}
                </h1>
                <p data-swiper-animation="animate__fadeIn" data-duration="0.6s">
                  {slide.childSlides[childActiveIndices[index]].description}
                </p>
                <button className={styles.exploreButton}>Saiba Mais</button>
              </div>
              <div className={styles.customNavButtons}>
                <button
                  onClick={() => childSwiperRefs.current[index]?.slidePrev()}
                  aria-label="Slide Anterior"
                >
                  <img src="/images/arrow.svg" alt="Anterior" />
                </button>
                <button
                  onClick={() => childSwiperRefs.current[index]?.slideNext()}
                  aria-label="Próximo Slide"
                >
                  <img src="/images/arrow-right.svg" alt="Próximo" />
                </button>
              </div>
              <div className={styles.swiperPagination}></div>
              {/* Swiper Filho */}
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                onSlideChange={(swiper) => {
                  const newChildIndex = swiper.realIndex;
                  const updatedChildActiveIndices = [...childActiveIndices];
                  updatedChildActiveIndices[index] = newChildIndex;
                  setChildActiveIndices(updatedChildActiveIndices);
                }}
                onSwiper={(swiper) => (childSwiperRefs.current[index] = swiper)}
                className={styles.childSwiper}
              >
                {slide.childSlides.map((childSlide, childIndex) => (
                  <SwiperSlide key={childIndex}>
                    <div className={styles.childContent}>
                      <img
                        src={childSlide.image}
                        alt={`Detalhe ${childIndex + 1}`}
                        className={styles.childImage}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.sidebar}>
        <button
          className={styles.navButton}
          onClick={() => mainSwiperRef.current?.slidePrev()}
        >
          <img src="/arrow-up.svg" alt="" />
        </button>
        <div className={styles.slideInfo}>
          <h2>{slides[currentSlide].title}</h2>
        </div>

        <button
          className={styles.navButton}
          onClick={() => mainSwiperRef.current?.slideNext()}
        >
          <img src="/arrow-down.svg" alt="" />
        </button>
      </div>

      <QuemSomos />
      <World />
      <CardSection />
      <Footer2 />
    </>
  );
}
