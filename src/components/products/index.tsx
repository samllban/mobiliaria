import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

// Definindo a interface para cada estudo de caso
interface FurnitureProduct {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

// Definindo a interface para as traduções
interface Translations {
  title: string;
  categories: string[];
  products: FurnitureProduct[];
}

// Definindo a interface para as props do componente
interface FurnitureProductsProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

// Criando o objeto de traduções
const translations: Record<FurnitureProductsProps["language"], Translations> = {
  pt: {
    title: "Nossos Produtos em Mobiliário",
    categories: ["todos", "sala", "quarto", "cozinha", "escritório"],
    products: [
      {
        id: 1,
        category: "sala",
        title: "Sofás Premium",
        description: "Sofás em couro e tecido com design ergonômico e exclusivo, fabricados sob medida.",
        image: "/sofapremio1.jpg",
      },
      {
        id: 2,
        category: "sala",
        title: "Conjuntos de Sala",
        description: "Conjuntos completos com sofá, poltronas e mesa de centro em perfeita harmonia.",
        image: "/conjuntosala2.jpg",
      },
      {
        id: 3,
        category: "quarto",
        title: "Camas King Size",
        description: "Camas premium em madeira maciça com cabeceiras estofadas e colchões de alta qualidade.",
        image: "/bedcama3.jpg",
      },
      {
        id: 4,
        category: "quarto",
        title: "Guarda-Roupas",
        description: "Guarda-roupas planejados com sistemas organizacionais inteligentes e materiais duráveis.",
        image: "/guardaroupa4.jpg",
      },
      {
        id: 5,
        category: "cozinha",
        title: "Cozinhas Planejadas",
        description: "Projetos completos de cozinha com ilhas, armários e eletrodomésticos integrados.",
        image: "/cozinha5.jpg",
      },
      {
        id: 6,
        category: "escritório",
        title: "Mesa de Escritório",
        description: "Mesas executivas em madeira nobre com designs modernos e funcionais.",
        image: "/escritorio6.jpg",
      },
      {
        id: 7,
        category: "escritório",
        title: "Estações de Trabalho",
        description: "Conjuntos completos para home office com ergonomia e estilo.",
        image: "/escritorioeco7.jpg",
      },
      {
        id: 8,
        category: "sala",
        title: "Móveis de TV",
        description: "Painéis e racks para TV com designs modernos e amplo espaço de armazenamento.",
        image: "/tvsand8.jpg",
      },
      {
        id: 9,
        category: "quarto",
        title: "Cômodas e Criados-Mudos",
        description: "Peças complementares com acabamento impecável e detalhes em metais nobres.",
        image: "/cama9.jpg",
      },
    ],
  },
  en: {
    title: "Our Furniture Products",
    categories: ["all", "living", "bedroom", "kitchen", "office"],
    products: [
      {
        id: 1,
        category: "living",
        title: "Premium Sofas",
        description: "Leather and fabric sofas with ergonomic and exclusive designs, custom made.",
        image: "/sofapremio1.jpg",
      },
      {
        id: 2,
        category: "living",
        title: "Living Room Sets",
        description: "Complete sets with sofa, armchairs and coffee table in perfect harmony.",
        image: "/conjuntosala2.jpg",
      },
      {
        id: 3,
        category: "bedroom",
        title: "King Size Beds",
        description: "Premium beds in solid wood with upholstered headboards and high quality mattresses.",
        image: "/bedcama3.jpg",
      },
      {
        id: 4,
        category: "bedroom",
        title: "Wardrobes",
        description: "Custom wardrobes with smart organizational systems and durable materials.",
        image: "/guardaroupa4.jpg",
      },
      {
        id: 5,
        category: "kitchen",
        title: "Custom Kitchens",
        description: "Complete kitchen projects with islands, cabinets and integrated appliances.",
        image: "/cozinha5.jpg",
      },
      {
        id: 6,
        category: "office",
        title: "Office Desks",
        description: "Executive desks in noble wood with modern and functional designs.",
        image: "/escritorio6.jpg",
      },
      {
        id: 7,
        category: "office",
        title: "Workstations",
        description: "Complete home office sets with ergonomics and style.",
        image: "/escritorioeco7.jpg",
      },
      {
        id: 8,
        category: "living",
        title: "TV Stands",
        description: "TV panels and racks with modern designs and ample storage space.",
        image: "/tvsand8.jpg",
      },
      {
        id: 9,
        category: "bedroom",
        title: "Dressers and Nightstands",
        description: "Complementary pieces with impeccable finishes and noble metal details.",
        image: "/cama9.jpg",
      },
    ],
  },
  fr: {
    title: "Nos Meubles",
    categories: ["tous", "salon", "chambre", "cuisine", "bureau"],
    products: [
      {
        id: 1,
        category: "salon",
        title: "Canapés Premium",
        description: "Canapés en cuir et tissu avec designs ergonomiques et exclusifs, fabriqués sur mesure.",
        image: "/sofapremio1.jpg",
      },
      {
        id: 2,
        category: "salon",
        title: "Ensembles Salon",
        description: "Ensembles complets avec canapé, fauteuils et table basse en parfaite harmonie.",
        image: "/conjuntosala2.jpg",
      },
      {
        id: 3,
        category: "chambre",
        title: "Lits King Size",
        description: "Lits premium en bois massif avec têtes de lit rembourrées et matelas de haute qualité.",
        image: "/bedcama3.jpg",
      },
      {
        id: 4,
        category: "chambre",
        title: "Garde-Robes",
        description: "Garde-robes sur mesure avec systèmes d'organisation intelligents et matériaux durables.",
        image: "/guardaroupa4.jpg",
      },
      {
        id: 5,
        category: "cuisine",
        title: "Cuisines Sur Mesure",
        description: "Projets de cuisine complets avec îlots, armoires et appareils électroménagers intégrés.",
        image: "/cozinha5.jpg",
      },
      {
        id: 6,
        category: "bureau",
        title: "Bureaux",
        description: "Bureaux exécutifs en bois noble avec designs modernes et fonctionnels.",
        image: "/escritorio6.jpg",
      },
      {
        id: 7,
        category: "bureau",
        title: "Postes de Travail",
        description: "Ensembles complets pour bureau à domicile avec ergonomie et style.",
        image: "/escritorioeco7.jpg",
      },
      {
        id: 8,
        category: "salon",
        title: "Meubles TV",
        description: "Panneaux et supports TV avec designs modernes et grand espace de stockage.",
        image: "/tvsand8.jpg",
      },
      {
        id: 9,
        category: "chambre",
        title: "Commode et Tables de Chevet",
        description: "Pièces complémentaires avec finitions impeccables et détails en métal noble.",
        image: "/cama9.jpg",
      },
    ],
  },
  es: {
    title: "Nuestros Muebles",
    categories: ["todos", "sala", "dormitorio", "cocina", "oficina"],
    products: [
      {
        id: 1,
        category: "sala",
        title: "Sofás Premium",
        description: "Sofás en cuero y tela con diseños ergonómicos y exclusivos, fabricados a medida.",
        image: "/sofapremio1.jpg",
      },
      {
        id: 2,
        category: "sala",
        title: "Juegos de Sala",
        description: "Conjuntos completos con sofá, sillones y mesa de centro en perfecta armonía.",
        image: "/conjuntosala2.jpg",
      },
      {
        id: 3,
        category: "dormitorio",
        title: "Camas King Size",
        description: "Camas premium en madera maciza con cabeceros tapizados y colchones de alta calidad.",
        image: "/bedcama3.jpg",
      },
      {
        id: 4,
        category: "dormitorio",
        title: "Armarios",
        description: "Armarios a medida con sistemas organizativos inteligentes y materiales duraderos.",
        image: "/guardaroupa4.jpg",
      },
      {
        id: 5,
        category: "cocina",
        title: "Cocinas a Medida",
        description: "Proyectos completos de cocina con islas, armarios y electrodomésticos integrados.",
        image: "/cozinha5.jpg",
      },
      {
        id: 6,
        category: "oficina",
        title: "Mesas de Oficina",
        description: "Mesas ejecutivas en maderas nobles con diseños modernos y funcionales.",
        image: "/escritorio6.jpg",
      },
      {
        id: 7,
        category: "oficina",
        title: "Estaciones de Trabajo",
        description: "Conjuntos completos para oficina en casa con ergonomía y estilo.",
        image: "/escritorioeco7.jpg",
      },
      {
        id: 8,
        category: "sala",
        title: "Muebles para TV",
        description: "Paneles y soportes para TV con diseños modernos y amplio espacio de almacenamiento.",
        image: "/tvsand8.jpg",
      },
      {
        id: 9,
        category: "dormitorio",
        title: "Cómodas y Mesillas",
        description: "Piezas complementarias con acabados impecables y detalles en metales nobles.",
        image: "/cama9.jpg",
      },
    ],
  },
};


export default function FurnituneProducts({ language }:FurnitureProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const text = translations[language]; // Escolhe o idioma com base na prop

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cardRefs.current.forEach((card) => {
        if (card && card.matches(":hover")) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          const deltaX = event.clientX - cardCenterX;
          const deltaY = event.clientY - cardCenterY;

          const rotateX = -(deltaY / 10); // Ajuste da sensibilidade
          const rotateY = deltaX / 10;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          card.style.transition = `transform 0.1s ease-out`;
        }
      });
    };

    const resetRotation = () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
          card.style.transition = `transform 1s ease`;
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

  const sortedStudies =
    selectedCategory === "todos"
      ? text.products
      : [
          ...text.products.filter(
            (study) => study.category === selectedCategory
          ),
          ...text.products.filter(
            (study) => study.category !== selectedCategory
          ),
        ];

  return (
    <section className={styles.container}>
      <div className={styles.caseStudies}>
        <div className={styles.categories}>
          <div className={styles.title}>
            <h2>{text.title}</h2>
          </div>
          {/* <div className={styles.subcate}>
            {text.categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? styles.active : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div> */}
        </div>
        <div className={styles.grid}>
          {sortedStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${styles.item} ${
                study.category !== selectedCategory &&
                selectedCategory !== "todos"
                  ? styles.hidden
                  : ""
              }`}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              onClick={() => {
                const message = `Gostaria de saber mais sobre ${study.title}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/5581991192880?text=${encodedMessage}`,
                  "_blank"
                );
              }}
            >
              <img src={study.image} alt={study.title} />
              <div className={styles.overlay}>
                <h5>{study.title}</h5>
                <p className={styles.description}>{study.description}</p>
                <img
                  src="/arrowWhite.svg"
                  alt="Arrow"
                  className={styles.arrow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
