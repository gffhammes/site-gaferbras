import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps { }

export const ImageStack = (props: IProps) => {
  return (
    <Stack>
      <Box sx={{ position: 'relative', width: '33rem', height: '20rem' }}>        
        <Image
          src='/images/gaferbras-1.jpg'
          alt='Gaferbras'
          layout='fill'
          objectFit='cover'
        />
      </Box>
      <Box
        bgcolor='secondary.main'
        sx={{
          height: '10rem',
          width: '100%',
          color: 'white',
          position: 'relative'
        }}
      >
        <Typography fontSize={48} lineHeight={1.2} sx={{ position: 'absolute', bottom: 0, left: 0 }}>Mais de<br/><strong>25 anos</strong> de<br/>história</Typography>
      </Box>
    </Stack>
  )
}