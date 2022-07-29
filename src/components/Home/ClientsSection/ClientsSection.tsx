import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { EmblaCarousel } from '../../common/EmblaCarousel'

interface IProps {
  clients: {
    logoSrc: string;
    name: string;
  }[];
}

const sxLogo = {
  position: 'relative',
  height: {
    xs: '2rem',
    sm: '4rem',
  },
  width: '12rem',
  m: 'auto',
  filter: 'contrast(0)',
  transition: '.5s ease all',
  '&:hover': {
    filter: 'contrast(1)',
  }
}

export const ClientsSection = ({ clients }: IProps) => {  
  const slidesMemo = useMemo(() => (
    clients.map(client => (
      <Box sx={sxLogo} key={client.name}>
        <Image
          src={client.logoSrc}
          alt={client.name}
          layout='fill'
          objectFit='contain'
        />
      </Box>
    ))
  ), [clients])

  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 5, mt: { xs: 10, md: 20 } }}>
        <EmblaCarousel slides={slidesMemo} options={{ align: 0, loop: true }} />
      </Container>
    </Box>
  )
}