import type { NextPage } from "next";
import { ClientsSection } from "../src/components/Home/ClientsSection/ClientsSection";
import { ContactSection } from "../src/components/Home/ContactSection/ContactSection";
import { MapsSection } from "../src/components/Home/MapsSection";
import { SliderSection } from "../src/components/Home/SliderSection/SliderSection";
import { TopSection } from "../src/components/Home/TopSection/TopSection";

const Home: NextPage = () => {
  const topSectionData = {
    h1: "Atuando há mais de 25 anos com excelência no mercado industrial! ",
    cards: [
      {
        imageSrc:
          "https://res.cloudinary.com/de5rrszh7/image/upload/v1659964820/gaferbras/manutencao_337de124ef.png",
        text: "Manutenção",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/de5rrszh7/image/upload/v1659964847/gaferbras/injecao_3b1147eff8.jpg",
        text: "Injeção & Moldes",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/de5rrszh7/image/upload/v1659964875/gaferbras/ferramentaria_3e2f6071d3.jpg",
        text: "Ferramentaria",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/de5rrszh7/image/upload/v1659976323/gaferbras/usinagem_f5c71d43bb.png",
        text: "Usinagem",
      },
    ],
    leftImageSrc:
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659976451/gaferbras/IMG_1824_700628b0d8.png",
  };

  const clientsData = [
    {
      name: "Britânia",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865610/gaferbras/logo_britania_3e1c095d44.png",
    },
    {
      name: "Kohls",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865533/gaferbras/logo_kohls_38e1c41be6.png",
    },
    {
      name: "Weg",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865613/gaferbras/logo_weg_f444779c49.png",
    },
    {
      name: "Tigre",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865611/gaferbras/logo_tigre_bb46d0119b.png",
    },
    {
      name: "Whrilpool",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865611/gaferbras/logo_whirlpool_903862cd19.png",
    },
    {
      name: "DMX",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865609/gaferbras/logo_dmx_29be690255.png",
    },
    {
      name: "Plasnorthon",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865609/gaferbras/logo_plasnorthon_3cc2ba6b99.png",
    },
    {
      name: "Plastibrasil",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865609/gaferbras/logo_plastibrasil_031f20f9ba.png",
    },
    {
      name: "Centralpack",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865608/gaferbras/logo_centralpack_79538dbe0d.png",
    },
    {
      name: "Krenke",
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865608/gaferbras/logo_krenke_c2e9a05369.png",
    },
  ];

  const sliderSectionData = {
    text: "Estrutura moderna com equipamentos de <strong>última geração</strong>",
    images: [
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1663188298/gaferbras/03_5968138577.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1663188298/gaferbras/01_05585bcedd.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1663188300/gaferbras/02_5d3fe97c6c.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659041605/gaferbras/IMG_1781_db6dde1ba4.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659041616/gaferbras/IMG_1806_f47459d75b.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659041626/gaferbras/IMG_1775_b86d0e4cc0.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659040700/gaferbras/IMG_1810_85df0eee25.png",
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659040700/gaferbras/IMG_1759_9435394d72.png",
    ],
  };

  const contactSectionData = {
    text: "Entre em contato e solicite o seu <strong>orçamento!</strong>",
  };

  return (
    <>
      <TopSection data={topSectionData} />
      <ClientsSection clients={clientsData} />
      <SliderSection data={sliderSectionData} />
      <ContactSection data={contactSectionData} />
      <MapsSection />
    </>
  );
};

export default Home;
