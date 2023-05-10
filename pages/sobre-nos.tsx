import type { NextPage } from "next";
import { ClientsSection } from "../src/components/About/ClientsSection";
import { MainSection } from "../src/components/About/MainSection/MainSection";

const mainSectionData = {
  title: "Sobre nós",
  text: "A Gaferbras é uma empresa consolidade na área de ferramentaria, que iniciou as suas operações em 1995 e hoje soma mais de 25 anos de experiência com mais de 300 clientes atendidos em toda a América Latina!\n\nDesde o início, nosso objetivo é proporcionar a melhor solução em ferramentais, unindo eficiência, tecnologia e qualidade. O compromisso com os nossos valores, dia após dia, proporcionaram o crescimento da empresa e a sua solidificação no mercado.\n\nHoje trabalhamos com o desenvolvimento de produtos, projetos, confecção de ferramentais, assistência técnica, e também, injeção de peças plásticas. Além disso, oferecemos garantia em cima de todos os produtos fabricados.\n\nNossa área de engenharia conta com softwares de última geração, para proporcionar uma melhor experiência em todo o processo de criação de produtos, alterações e melhorias.\n\nJá na área de manufatura, contamos com equipamentos de ponta, que são responsáveis por toda confecção de ferramentais, injeção de peças plásticas e confecção de peças de reposição para o setor industrial.\n\nA Gaferbras está sempre investindo em aprimoramentos e novas tecnologias, assim como na capacitação de seus fornecedores e funcionários, para se manter atualizada, garantir a qualidade de seus serviços e alcançar a satisfação de seus clientes. \n\nAo longo de nossa história, construímos uma carteira de clientes com empresas dos mais diversos ramos de atuação, como indústrias de eletrodomésticos, brinquedos, utilidades domésticas e montadoras automotivas.",
  cards: {
    imageSrc:
      "https://res.cloudinary.com/de5rrszh7/image/upload/v1659976451/gaferbras/IMG_1824_700628b0d8.png",
    redCard: {
      href: "/sobre-nos",
      text: "Mais de\n**25 anos** de\nhistória",
    },
    blueCard: {
      href: "/sobre-nos",
      text: "Mais de\n**1500 projetos**\ndesenvolvidos",
    },
  },
};

const clientsSectionData = {
  text: "Conheça algumas das marcas que confiam em nosso trabalho:",
  clients: [
    {
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865610/gaferbras/logo_britania_3e1c095d44.png",
      name: "Britânia",
    },
    {
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865613/gaferbras/logo_weg_f444779c49.png",
      name: "Weg",
    },
    {
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865611/gaferbras/logo_tigre_bb46d0119b.png",
      name: "Tigre",
    },
    {
      logoSrc:
        "https://res.cloudinary.com/de5rrszh7/image/upload/v1658865611/gaferbras/logo_whirlpool_903862cd19.png",
      name: "Whrilpool",
    },
  ],
};

const About: NextPage = () => {
  return (
    <>
      <MainSection data={mainSectionData} />
      <ClientsSection data={clientsSectionData} />
    </>
  );
};

export default About;
