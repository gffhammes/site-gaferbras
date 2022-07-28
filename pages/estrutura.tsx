import type { NextPage } from 'next'
import { MainSection } from '../src/components/Structure/MainSection'
import qs from 'qs';
import axios from 'axios'

const Structure: NextPage = ({ data }: any) => {
  console.log(data)

  const { titulo, h1, cards } = data.attributes;

  const mainSectionData = {
    title: titulo,
    h1: h1,
    cards: {
      card1: {        
        imageSrc: cards.card1.imagem.data.attributes.url,
        text: cards.card1.texto,
      },
      card2: {      
        imageSrc: cards.card2.imagem.data.attributes.url,
        text: cards.card2.texto,
      },
      card3: {       
        imageSrc: cards.card3.imagem.data.attributes.url,
        text: cards.card3.texto,
      },
      card4: {       
        imageSrc: cards.card4.imagem.data.attributes.url,
        text: cards.card4.texto,
      },
      card5: {       
        imageSrc: cards.card5.imagem.data.attributes.url,
        text: cards.card5.texto,
      },
      card6: {       
        imageSrc: cards.card6.imagem.data.attributes.url,
        text: cards.card6.texto,
      },
      card7: {       
        imageSrc: cards.card7.imagem.data.attributes.url,
        text: cards.card7.texto,
      },
      card8: {      
        imageSrc: cards.card8.imagem.data.attributes.url,
        text: cards.card8.texto,
      },
    }
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
      'cards.card1.imagem',
      'cards.card2.imagem',
      'cards.card3.imagem',
      'cards.card4.imagem',
      'cards.card5.imagem',
      'cards.card6.imagem',
      'cards.card7.imagem',
      'cards.card8.imagem',
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
