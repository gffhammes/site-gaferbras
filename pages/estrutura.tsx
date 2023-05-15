import type { NextPage } from "next";
import { MainSection } from "../src/components/Structure/MainSection";

const mainSectionData = {
  title: "Estrutura",
  h1: "Para suprir a sua necessidade contamos com um parque fabril completo de <strong>1000m²</strong>",
  cards: [
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1663188568/gaferbras/IMG_1762_00db46f328.png",
      text: "CENTRO DE USINAGEM CNC OKADA",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131369/gaferbras/IMG_1810_f07e76240f.png",
      text: "INJETORA RHINO 328T",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1663189072/gaferbras/IMG_1806_af25ee2237.png",
      text: "TORNO MECÂNICO CLEVER",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131442/gaferbras/IMG_1806_7d0b1f956f.png",
      text: "INJETORA RHINO 130T",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131481/gaferbras/IMG_1795_0a4ee1c418.png",
      text: "FURADEIRA RADIAL CLEVER",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131518/gaferbras/IMG_1775_dd7bb8bf42.png",
      text: "ELETRO EROSÃO ENGEMAQ EDM 800 NC",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131544/gaferbras/IMG_1781_0bb34880ab.png",
      text: "ELETRO EROSÃO ENDOMAQ EDM 400 NC",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131563/gaferbras/IMG_1323_14ea4f6457.jpg",
      text: "CENTRO DE USINAGEM CNC ROMI DISCOVERY 1250",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1663188795/gaferbras/IMG_1759_299f134396.png",
      text: "INJETORA 328T",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131630/gaferbras/IMG_1789_0ed3e1db94.png",
      text: "CENTRO DE USINAGEM CNC HARTFORD 1000",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1659131664/gaferbras/IMG_1786_8067c71ab2.png",
      text: "CENTRO DE USINAGEM CNC FEELER 1000",
    },
  ],
};

const Structure: NextPage = () => {
  return <MainSection data={mainSectionData} />;
};

export default Structure;
