import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadPageTitle } from '../src/components/common/HeadPageTitle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadPageTitle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
