import axios from 'axios';
import type { NextPage } from 'next'
import { MainSection } from '../src/components/Contact/MainSection'

const Contact: NextPage = ({ data }: any) => {
  return (
    <>
      <MainSection data={data} />
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const pageContentRes = await axios.get(`${API_URL}/contato?populate=*`).then(response => response.data);

  return {
    props: {
      data: pageContentRes.data,
    }
  }

}

export default Contact
