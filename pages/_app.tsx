import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadPageTitle } from '../src/components/common/HeadPageTitle'
import { NavBar } from '../src/components/common/NavBar/NavBar'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { Footer } from '../src/components/common/Footer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F3C9A',
    },
    secondary: {
      main: '#FE3C44',
    },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HeadPageTitle />
      <NavBar />
      <Box component='main'>        
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
