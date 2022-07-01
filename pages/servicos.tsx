import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { MainSection } from '../src/components/Services/MainSection'

const Services: NextPage = () => {
  const router = useRouter();

  // console.log(router.query[""])
  //?=ferramentais

  return (
    <>
      <MainSection />
    </>
  )
}

export default Services
