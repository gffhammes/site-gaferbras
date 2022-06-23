import type { NextPage } from 'next'
import { ClientsSection } from '../src/components/Home/ClientsSection/ClientsSection'
import { TopSection } from '../src/components/Home/TopSection/TopSection'

const Home: NextPage = () => {
  return (
    <>
      <TopSection />
      <ClientsSection />
    </>
  )
}

export default Home
