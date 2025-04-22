import Link from "next/link";
import styles from "./styles.module.scss";

interface FooterProps {
  language: "pt" | "en" | "fr" | "es"; // Propriedade de idioma
}

const translations = {
  pt: {
    serviceQuestions: "DÚVIDAS SOBRE NOSSOS MÓVEIS",
    onlineService: "Atendimento especializado em design",
    customerSupport: "SUPORTE AO CLIENTE",
    availableInBrazil: "Atendemos todo o Brasil",
    remoteService: "Projetos à distância",
    subscribeTitle: "INSCREVA-SE PARA NOVOS LANÇAMENTOS",
    privacy: "Garantimos a proteção da sua privacidade",
    footerText: "© 2024 Mobili Elegante desenvolvido por Samuel Bandeira",
    privacyPolicy: "Política de Privacidade",
    termsConditions: "Termos e Condições",
    copyrights: "Direitos Autorais",
  },
  en: {
    serviceQuestions: "QUESTIONS ABOUT OUR FURNITURE",
    onlineService: "Specialized design service",
    customerSupport: "CUSTOMER SUPPORT",
    availableInBrazil: "Serving all of Brazil",
    remoteService: "Remote projects",
    subscribeTitle: "SUBSCRIBE FOR NEW RELEASES",
    privacy: "We guarantee the protection of your privacy",
    footerText: "© 2024 Elegant Furniture developed by SolidTech",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms and Conditions",
    copyrights: "Copyright",
  },
  fr: {
    serviceQuestions: "QUESTIONS SUR NOS MEUBLES",
    onlineService: "Service de design spécialisé",
    customerSupport: "SERVICE CLIENT",
    availableInBrazil: "Desservant tout le Brésil",
    remoteService: "Projets à distance",
    subscribeTitle: "INSCRIVEZ-VOUS POUR LES NOUVEAUTÉS",
    privacy: "Nous garantissons la protection de votre vie privée",
    footerText: "© 2024 Mobilier Élégant développé par SolidTech",
    privacyPolicy: "Politique de Confidentialité",
    termsConditions: "Termes et Conditions",
    copyrights: "Droits d'Auteur",
  },
  es: {
    serviceQuestions: "PREGUNTAS SOBRE NUESTROS MUEBLES",
    onlineService: "Servicio especializado de diseño",
    customerSupport: "SOPORTE AL CLIENTE",
    availableInBrazil: "Atendemos en todo Brasil",
    remoteService: "Proyectos a distancia",
    subscribeTitle: "SUSCRÍBETE PARA NUEVOS LANZAMIENTOS",
    privacy: "Garantizamos la protección de tu privacidad",
    footerText: "© 2024 Muebles Elegantes desarrollado por SolidTech",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    copyrights: "Derechos de Autor",
  },
};

export default function Footer({ language }: FooterProps) {
  const text = translations[language]; // Seleciona o idioma com base na prop

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            
            <div className={styles.letters}>
              <Link href="https://www.instagram.com/agenciaeasyvisa/">
                <img src="/instagram.svg" alt="Instagram" />
              </Link>
              <Link href="https://wa.me/message/AVAYUU2HYYIOJ1">
                <img src="/whatsapp.svg" alt="WhatsApp" />
              </Link>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.box2}>
              <h5>{text.serviceQuestions}</h5>
              <p>{text.onlineService}</p>
              <h4>contato@mobilielegante.com.br</h4>
            </div>
            <div className={styles.box2}>
              <h5>{text.customerSupport}</h5>
              <p>{text.availableInBrazil}</p>
              <p>{text.remoteService}</p>
              <h4>suporte@mobilielegante.com.br</h4>
            </div>
          </div>

          <div className={styles.rightside}>
            <div className={styles.rightTop}>
              <h2>{text.subscribeTitle}</h2>
              <div className={styles.inputContainer}>
                <input type="email" placeholder="Digite seu email..." />
                <img src="/mail.svg" alt="Ícone de email" />
              </div>
              <div className={styles.privacy}>
                <img src="/hand.svg" alt="Ícone de privacidade" />
                <p>{text.privacy}</p>
              </div>
            </div>
            <div className={styles.rightBottom}>
              <Link href="https://seloresponsavel.turismo.gov.br/selo-turismo-responsavel/verificar-selo/56684836000107/286023">
                <img src="/selada.png" alt="Selo de Qualidade" className={styles.image} />
              </Link>
              <Link href="https://www.reclameaqui.com.br/">
                <img src="reclame.png" alt="Reclame Aqui" />
              </Link>
              <Link href="https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/56684836000107">
                <img src="cadastur.png" alt="Cadastur" />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <p>{text.footerText}</p>
          </div>
          <div className={styles.rightBottom}>
            <p>{text.privacyPolicy}</p>
            <p>{text.termsConditions}</p>
            <p>{text.copyrights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}