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
    <Box bgcolor='rgba(242, 242, 252, 0.5)'>
      <Container sx={{ py: 5, mt: 20 }}>
        <Grid container spacing={2}>
          {clients.map(client => (
            <Grid item key={client.name} xs={6} sm={3} sx={{ display: 'flex' }} >
              <Box sx={{ position: 'relative', height: '5rem', width: '10rem', m: 'auto' }}>
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