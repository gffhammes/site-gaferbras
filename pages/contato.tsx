import type { NextPage } from "next";
import { MainSection } from "../src/components/Contact/MainSection";

const data = {
  attributes: {
    titulo: "Contato",
    h1: "Mande sua mensagem que responderemos o mais rápido possível!",
    createdAt: "2022-07-26T21:13:23.659Z",
    updatedAt: "2022-07-26T21:13:24.821Z",
    publishedAt: "2022-07-26T21:13:24.818Z",
  },
};

const Contact: NextPage = () => {
  return <MainSection data={data} />;
};

export default Contact;
