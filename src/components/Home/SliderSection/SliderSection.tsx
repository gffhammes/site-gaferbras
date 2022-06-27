import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Slider from './Slider'

interface IProps { }

const text = `Estrutura moderna com equipamentos de <strong>última geração</strong>`

export const SliderSection = (props: IProps) => {
  return (
    <Box sx={{ py: 10 }}>
      <Container sx={{ mb: 10 }}>        
        <Box>
          <Typography
            fontSize={36}
            textAlign='center'
            dangerouslySetInnerHTML={{__html: text}}
            sx={{
              maxWidth: '30ch',
              mx: 'auto',
              color: 'primary.main',
              '& strong': {
                borderBottom: '2px solid var(--red)',
                paddingBottom: 1,
                whiteSpace: 'nowrap'
              },
            }}
          />
        </Box>
      </Container>
      <Slider />
    </Box>
  )
}