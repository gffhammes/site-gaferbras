import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
interface IProps { }

const clients = [
  {
    name: 'Whirlpool',
    logo: 'logo-whirlpool.png',
  },
  {
    name: 'Tigre',
    logo: 'logo-tigre.png',
  },
  {
    name: 'WEG',
    logo: 'logo-weg.png',
  },
  {
    name: 'Plastibrasil',
    logo: 'logo-plastibrasil.png',
  },
  {
    name: 'DMX Móveis',
    logo: 'logo-dmx.png',
  },
  {
    name: 'Krenke Brinquedos',
    logo: 'logo-krenke.png',
  },
  {
    name: 'Britania',
    logo: 'logo-britania.png',
  },
  {
    name: 'Central Pack',
    logo: 'logo-centralpack.png',
  },
  {
    name: 'Plasnorthon',
    logo: 'logo-plasnorthon.png',
  },
  {
    name: 'Kohls',
    logo: 'logo-kohls.png',
  },
]

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

export const ClientsSection = (props: IProps) => {
  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 5, mt: { xs: 10, md: 20 } }}>
        <Grid container spacing={{ xs: 5, sm: 10, lg: 5}}>
          {clients.map(client => (
            <Grid item key={client.name} xs={6} md={3} sx={{ display: 'flex' }} >
              <Box sx={sxLogo}>
                <Image
                  src={`/images/clientes/${client.logo}`}
                  alt={client.name}
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}