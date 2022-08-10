import axios from 'axios';
import type { NextPage } from 'next'
import { MainSection } from '../src/components/Contact/MainSection'

const Contact: NextPage = ({ data, businessData }: any) => {
  return (
    <>
      <MainSection data={data} recipientMail={businessData.emailFormulario} />
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const pageContentRes = await axios.get(`${API_URL}/contato?populate=*`).then(response => response.data);
  const resBusinessData = await axios.get(`${API_URL}/dados-empresa`).then(response => response.data);

  return {
    props: {
      data: pageContentRes.data,
      businessData: resBusinessData.data.attributes,
    }
  }

}

export default Contact
