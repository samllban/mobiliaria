import BannerServices from "@/components/bannerServices";
//import styles from "./styles.module.scss";
import Header from "@/components/header";
import { useRef, useState } from "react";
//import ServicesMap from "@/components/servicesMap";
import ServiceBenefits from "@/components/serviceBenefits";
import ServiceSwiper from "@/components/serviceSwiper";
import CardSection from "@/components/cardsection";
import Footer2 from "@/components/footer2";

type Language = "pt" | "en" | "fr" | "es";

export default function ServicosPage() {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [language, setLanguage] = useState<Language>("pt");
  return (
    <>
      <Header
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        language={language}
        setLanguage={setLanguage}
      />
      <BannerServices />
      <ServiceBenefits />
      <ServiceSwiper />
      <CardSection />
      <Footer2 />
    </>
  );
}
