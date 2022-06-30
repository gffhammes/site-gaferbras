import { Box, Container, Stack, Typography } from '@mui/material'
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
    <Box>
      <Container>        
        <Typography sx={{ color: 'primary.main' }} fontWeight={500}>Conheça algumas das marcas que confiam em nosso trabalho:</Typography>
        <Stack direction='row' spacing={4} sx={{ my: 5 }}>
          {clients.map(client => (
            <Box key={client.name} sx={{ position: 'relative', height: '3rem', width: '7rem' }}>
              <Image
                src={`/images/clientes/${client.logo}`}
                alt={client.name}
                layout='fill'
                objectFit='contain'
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}