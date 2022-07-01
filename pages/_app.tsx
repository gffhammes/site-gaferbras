import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadPageTitle } from '../src/components/common/HeadPageTitle'
import { NavBar } from '../src/components/common/NavBar/NavBar'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { Footer } from '../src/components/common/Footer/Footer' 
import { ProgressBar } from '../src/components/common/ProgressBar'
import '../styles/progress-bar.css'

const theme = createTheme({
  palette: {
    primary: { main: '#3F3C9A' },
    secondary: { main: '#FE3C44' },
  }
});

theme.typography.h1 = {
  fontWeight: 500,
  lineHeight: 1.3,
  fontSize: '2.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 54,
  },
}


function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <ThemeProvider theme={theme}>
      <ProgressBar />
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
