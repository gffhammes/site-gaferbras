import type { NextPage } from 'next'
import { ClientsSection } from '../src/components/About/ClientsSection'
import { MainSection } from '../src/components/About/MainSection/MainSection'

const About: NextPage = () => {
  return (
    <>
      <MainSection />
      <ClientsSection />
    </>
  )
}

export default About
