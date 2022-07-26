import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { MainSection } from '../src/components/Services/MainSection'
import axios from 'axios';

const Services: NextPage = ({ data }: any) => {
  return (
    <>
      <MainSection services={data} />
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await axios.get(`${API_URL}/servicos?populate=*`).then(response => response.data);

  return {
    props: {
      data: res.data,
    }
  }

}

export default Services
