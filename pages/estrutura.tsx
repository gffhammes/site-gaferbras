import type { NextPage } from 'next'
import { MainSection } from '../src/components/Structure/MainSection'
import qs from 'qs';
import axios from 'axios'

const Structure: NextPage = ({ data }: any) => {
  console.log(data)


  return (
    <>
      <MainSection />
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const query = qs.stringify({
    // populate: [
    //   'imagemTopo',
    //   'cardsTopo.card1.foto',
    //   'cardsTopo.card2.foto',
    //   'cardsTopo.card3.foto',
    //   'cardsTopo.card4.foto',
    //   'galeria',
    // ]
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
