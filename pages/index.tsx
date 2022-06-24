import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { ClientsSection } from '../src/components/Home/ClientsSection/ClientsSection'
import { ContactForm } from '../src/components/Home/ContactSection/ContactSection'
import { MapsSection } from '../src/components/Home/MapsSection'
import { SliderSection } from '../src/components/Home/SliderSection/SliderSection'
import { TopSection } from '../src/components/Home/TopSection/TopSection'

const Home: NextPage = () => {
  return (
    <>
      <TopSection />
      <ClientsSection />
      <SliderSection />
      <ContactForm />
      <MapsSection />
    </>
  )
}

export default Home
