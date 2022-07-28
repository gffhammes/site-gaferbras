import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { ScrollAppearMotion, ScrollAppearOpacityMotion } from '../../common/motion/ScrollAppearMotion'
import Slider from './Slider'

interface IProps {
  data: {
    text: string;
    images: string[];
  };
}

export const SliderSection = ({
  data: {
    text,
    images
  }
}: IProps) => {

  return (
    <Box sx={{ py: 10 }}>
      <Container sx={{ mb: 10 }}>        
        <Box>
          <ScrollAppearMotion>            
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
          </ScrollAppearMotion>
        </Box>
      </Container>
      <ScrollAppearOpacityMotion >
        <Slider images={images} />
      </ScrollAppearOpacityMotion>
    </Box>
  )
}