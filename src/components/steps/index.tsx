import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface StepsProps {
  language: "pt" | "en" | "fr" | "es"; // Propriedade de idioma
}

export default function Steps({ language }: StepsProps) {
  const rowRefs = useRef<HTMLDivElement[]>([]);

  const translations = {
    pt: {
      title:
        "Mobiliar sua casa pode ser mais fácil do que você imagina. Nós cuidamos de todo o processo.",
      steps: [
        {
          number: "01",
          title: "Consultoria de Design",
          description:
            "Nossos designers especializados criam projetos personalizados para seu espaço.",
        },
        {
          number: "02",
          title: "Materiais Premium",
          description:
            "Trabalhamos apenas com materiais de alta qualidade e fornecedores certificados.",
        },
        {
          number: "03",
          title: "Fabricação Sob Medida",
          description:
            "Móveis feitos exatamente para suas medidas e necessidades específicas.",
        },
        {
          number: "04",
          title: "Entrega e Montagem",
          description:
            "Realizamos a entrega e montagem completa, garantindo perfeição em cada detalhe.",
        },
      ],
    },
    en: {
      title:
        "Furnishing your home can be easier than you think. We handle the entire process.",
      steps: [
        {
          number: "01",
          title: "Design Consultation",
          description:
            "Our specialized designers create custom projects for your space.",
        },
        {
          number: "02",
          title: "Premium Materials",
          description:
            "We work only with high-quality materials and certified suppliers.",
        },
        {
          number: "03",
          title: "Custom Manufacturing",
          description:
            "Furniture made exactly to your measurements and specific needs.",
        },
        {
          number: "04",
          title: "Delivery & Assembly",
          description:
            "We provide complete delivery and assembly, ensuring perfection in every detail.",
        },
      ],
    },
    fr: {
      title:
        "Meubler votre maison peut être plus simple que vous ne le pensez. Nous nous occupons de tout le processus.",
      steps: [
        {
          number: "01",
          title: "Consultation en Design",
          description:
            "Nos designers spécialisés créent des projets personnalisés pour votre espace.",
        },
        {
          number: "02",
          title: "Matériaux Premium",
          description:
            "Nous travaillons uniquement avec des matériaux de haute qualité et des fournisseurs certifiés.",
        },
        {
          number: "03",
          title: "Fabrication Sur Mesure",
          description:
            "Meubles fabriqués exactement selon vos mesures et besoins spécifiques.",
        },
        {
          number: "04",
          title: "Livraison & Montage",
          description:
            "Nous assurons une livraison et un montage complets, garantissant la perfection dans chaque détail.",
        },
      ],
    },
    es: {
      title:
        "Amueblar tu hogar puede ser más fácil de lo que piensas. Nos encargamos de todo el proceso.",
      steps: [
        {
          number: "01",
          title: "Asesoría de Diseño",
          description:
            "Nuestros diseñadores especializados crean proyectos personalizados para tu espacio.",
        },
        {
          number: "02",
          title: "Materiales Premium",
          description:
            "Trabajamos solo con materiales de alta calidad y proveedores certificados.",
        },
        {
          number: "03",
          title: "Fabricación a Medida",
          description:
            "Muebles hechos exactamente a tus medidas y necesidades específicas.",
        },
        {
          number: "04",
          title: "Entrega e Instalación",
          description:
            "Realizamos entrega e instalación completa, garantizando perfección en cada detalle.",
        },
      ],
    },
  };

  const text = translations[language]; // Seleciona o texto com base no idioma

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      rowRefs.current.forEach((row) => {
        if (row) {
          gsap.fromTo(
            row,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
                onLeave: () => {
                  gsap.to(row, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                  });
                },
              },
            }
          );
        }
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{text.title}</h3>
        </div>
        {text.steps.map((step, index) => (
          <div className={styles.rows} key={index}>
            <div
              className={styles.row}
              ref={(el) => {
                if (el) rowRefs.current[index] = el;
              }}
            >
              <div className={styles.leftside}>
                <p>{step.number}</p>
                <div className={styles.rowTitle}>
                  <img src="/design-icon.svg" alt="" />
                  <h3>{step.title}</h3>
                </div>
              </div>
              <div className={styles.rightside}>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}