import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { ClientsSection } from '../src/components/Home/ClientsSection/ClientsSection'
import { ContactSection } from '../src/components/Home/ContactSection/ContactSection'
import { MapsSection } from '../src/components/Home/MapsSection'
import { SliderSection } from '../src/components/Home/SliderSection/SliderSection'
import { TopSection } from '../src/components/Home/TopSection/TopSection'
import qs from 'qs';
import axios from 'axios'

const Home: NextPage = ({ data }: any) => {
  console.log(data)

  const { h1, cardsTopo, imagemTopo, tituloGaleria, galeria, textoContato } = data.attributes;

  const topSectionData = {
    h1: h1,
    cards: [
      {
        imageSrc: cardsTopo.card1.foto.data.attributes.url,
        text: cardsTopo.card1.Texto,
      },
      {
        imageSrc: cardsTopo.card2.foto.data.attributes.url,
        text: cardsTopo.card2.Texto,
      },
      {
        imageSrc: cardsTopo.card3.foto.data.attributes.url,
        text: cardsTopo.card3.Texto,
      },
      {
        imageSrc: cardsTopo.card4.foto.data.attributes.url,
        text: cardsTopo.card4.Texto,
      },
    ],
    leftImageSrc: imagemTopo.data.attributes.url,
  }

  const sliderSectionData = {    
    text: tituloGaleria,
    images: galeria.data.map((image: any) => image.attributes.url),
  }
  
  const contactSectionData = {
    text: textoContato,
  }

  return (
    <>
      <TopSection data={topSectionData} />
      <ClientsSection />
      <SliderSection data={sliderSectionData} />
      <ContactSection data={contactSectionData} />
      <MapsSection />
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const query = qs.stringify({
    populate: [
      'imagemTopo',
      'cardsTopo.card1.foto',
      'cardsTopo.card2.foto',
      'cardsTopo.card3.foto',
      'cardsTopo.card4.foto',
      'galeria',
    ]
  }, {
    encodeValuesOnly: true,
  });

  const res = await axios.get(`${API_URL}/home?${query}`).then(response => response.data);

  return {
    props: {
      data: res.data,
    }
  }

}

export default Home
