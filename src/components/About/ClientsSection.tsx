import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps {
  data: {
    text: string;
    clients: {
      logoSrc: string;
      name: string;
    }[];
  }
}

export const ClientsSection = ({
  data: {
    text,
    clients
  }
}: IProps) => {
  return (
    <Box>
      <Container>        
        <Typography sx={{ color: 'primary.main' }} fontWeight={500} dangerouslySetInnerHTML={{ __html: text }} />
        <Stack direction='row' spacing={4} sx={{ my: 5 }}>
          {clients.map(client => (
            <Box key={client.name} sx={{ position: 'relative', height: '3rem', width: '7rem' }}>
              <Image
                src={client.logoSrc}
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