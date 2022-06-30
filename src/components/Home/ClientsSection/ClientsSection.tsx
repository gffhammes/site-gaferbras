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
    name: 'Tritec',
    logo: 'logo-tritec.png',
  },
  {
    name: 'Tigre',
    logo: 'logo-tigre.png',
  },
  {
    name: 'WEG',
    logo: 'logo-weg.png',
  },
]

export const ClientsSection = (props: IProps) => {
  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 5, mt: { xs: 10, md: 20 } }}>
        <Grid container spacing={5}>
          {clients.map(client => (
            <Grid item key={client.name} xs={6} md={3} sx={{ display: 'flex' }} >
              <Box sx={{ position: 'relative', height: '4rem', width: '12rem', m: 'auto' }}>
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