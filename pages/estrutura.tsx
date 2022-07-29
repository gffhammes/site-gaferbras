import type { NextPage } from 'next'
import { MainSection } from '../src/components/Structure/MainSection'
import qs from 'qs';
import axios from 'axios'

const Structure: NextPage = ({ data }: any) => {
  const { titulo, h1, cardsEstrutura } = data.attributes;

  const mainSectionData = {
    title: titulo,
    h1: h1,
    cards: cardsEstrutura.map((card: any) => ({
      imageSrc: card.imagem.data.attributes.url,
      text: card.texto,
    }))
  }

  return (
    <>
      <MainSection data={mainSectionData} />
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const query = qs.stringify({
    populate: [
      'cardsEstrutura.imagem',
    ]
  }, {
    encodeValuesOnly: true,
  });

  const res = await axios.get(`${API_URL}/estrutura?${query}`).then(response => response.data);

  return {
    props: {
      data: res.data,
    }
  }

}


export default Structure
