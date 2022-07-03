import { Box, Container } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '../Button'

interface IProps { }

export const BackToTop = (props: IProps) => {

  const scrollToTop = () => {
    document.body.scrollTo({top: 0, behavior: 'smooth'}) // For Safari
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'}) // For Chrome, Firefox, IE and Opera
  }

  return (
    <Box sx={{ position: 'absolute', width: '100%' }}>
      <Container sx={{ display: 'flex' }}>
        <Button startIcon={<ArrowUpwardIcon sx={{ color: '#1E174C' }} />} sx={{ ml: 'auto', transform: 'translateY(-50%)' }} onClick={scrollToTop} color='secondary' >Voltar ao Topo</Button>
      </Container>
    </Box>
  )
}