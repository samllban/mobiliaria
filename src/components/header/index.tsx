import { RefObject, useEffect, useState } from "react";
import styles from "./styles.module.scss";
//import Link from "next/link";

type Language = "pt" | "en" | "fr" | "es";

interface HeaderProps {
  aboutUsRef: RefObject<HTMLElement>;
  servicesRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  language: Language;
  setLanguage: (language: Language) => void;
}

export default function Header({
  aboutUsRef,
  servicesRef,
  contactRef,
  language,
  setLanguage,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const [isClosing, setIsClosing] = useState(false);

  const handleMenuToggle = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const translations = {
    pt: {
      aboutUs: "Quem Somos",
      services: "Serviços",
      contact: "Contato",
      message: "Mande uma mensagem",
    },
    en: {
      aboutUs: "About Us",
      services: "Services",
      contact: "Contact",
      message: "Send a message",
    },
    fr: {
      aboutUs: "À propos",
      services: "Services",
      contact: "Contact",
      message: "Envoyer un message",
    },
    es: {
      aboutUs: "Quiénes Somos",
      services: "Servicios",
      contact: "Contacto",
      message: "Enviar un mensaje",
    },
  };

  const text = translations[language];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header
      className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/logo10.svg" alt="Logo" />
        </div>
        <div className={styles.centerNav}>
          {" "}
          <p onClick={() => scrollToSection(aboutUsRef)}>{text.aboutUs}</p>

          <p onClick={() => scrollToSection(servicesRef)}>{text.services}</p>

          <p onClick={() => scrollToSection(contactRef)}>{text.contact}</p>{" "}
        </div>
        {/* Hamburger Menu */}
        <div className={styles.hamburgerMenu} onClick={handleMenuToggle}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Sidebar Menu (Open/Close based on menuOpen state) */}
        <nav
          className={`${styles.navMenu} ${menuOpen ? styles.open : ""} ${isClosing ? styles.closing : ""
            }`}
        >
          <p onClick={() => scrollToSection(aboutUsRef)}>{text.aboutUs}</p>
          <p onClick={() => scrollToSection(servicesRef)}>{text.services}</p>
          <p onClick={() => scrollToSection(contactRef)}>{text.contact}</p>

          {/* Language Selector inside the sidebar menu */}
          <div className={styles.languageSwitcher}>
            <div className={styles.selectedLanguage} onClick={toggleDropdown}>
              <img
                src={`/${language}.svg`}
                className={styles.flag}
                alt={`Idioma ${language}`}
              />
              <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <div className={styles.dropdown}>
                {language !== "pt" && (
                  <img
                    src="/pt.svg"
                    className={styles.flag}
                    alt="Português"
                    onClick={() => handleLanguageChange("pt")}
                  />
                )}
                {language !== "en" && (
                  <img
                    src="/en.svg"
                    className={styles.flag}
                    alt="Inglês"
                    onClick={() => handleLanguageChange("en")}
                  />
                )}
                {language !== "fr" && (
                  <img
                    src="/fr.svg"
                    className={styles.flag}
                    alt="Francês"
                    onClick={() => handleLanguageChange("fr")}
                  />
                )}
                {language !== "es" && (
                  <img
                    src="/es.svg"
                    className={styles.flag}
                    alt="Espanhol"
                    onClick={() => handleLanguageChange("es")}
                  />
                )}
              </div>
            )}
          </div>
        </nav>

        <div className={styles.rightside}>
          <button
            onClick={() =>
              window.open("https://wa.me/message/AVAYUU2HYYIOJ1", "_blank")
            }
          >
            <img
              src="/mail2.svg"
              className={styles.icon}
              alt="Ícone de email"
            />
            <p>{text.message}</p>
          </button>
        </div>
      </div>
    </header>
  );
}
