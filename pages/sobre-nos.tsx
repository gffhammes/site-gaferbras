import axios from 'axios'
import type { NextPage } from 'next'
import { ClientsSection } from '../src/components/About/ClientsSection'
import { MainSection } from '../src/components/About/MainSection/MainSection'
import qs from 'qs';

const About: NextPage = ({ data }: any) => {
  const { titulo, texto, imagem, cardAzul, cardVermelho, textoClientes, clientes } = data.attributes;

  const mainSectionData = {
    title: titulo,
    text: texto,
    cards: {
      imageSrc: imagem.data.attributes.url,
      redCard: {
        href: cardVermelho.href,
        text: cardVermelho.texto,
      },
      blueCard: {
        href: cardAzul.href,
        text: cardAzul.texto,
      },
    }
  }

  const clientsSectionData = {
    text: textoClientes,
    clients: clientes.data.map((cliente: any) => ({
      logoSrc: cliente.attributes.logo.data.attributes.url,
      name: cliente.attributes.nome,
    }))
  }

  return (
    <>
      <MainSection data={mainSectionData} />
      <ClientsSection data={clientsSectionData}/>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const query = qs.stringify({
    populate: [
      'imagem',
      'cardVermelho',
      'cardAzul',
      'clientes',
      'clientes.logo',
    ]
  }, {
    encodeValuesOnly: true,
  });

  const res = await axios.get(`${API_URL}/sobre-nos?${query}`).then(response => response.data);

  return {
    props: {
      data: res.data,
    }
  }

}

export default About
