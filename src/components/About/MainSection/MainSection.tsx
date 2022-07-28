import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { ScrollAppearOpacityMotion } from '../../common/motion/ScrollAppearMotion'
import { ImageStack } from './ImageStack'

interface IProps {
  data: {
    title: string;
    text: string;
    cards: {
      imageSrc: string;
      redCard: {
        href: string;
        text: string;
      },
      blueCard: {
        href: string;
        text: string;
      },
    }
  }
}

export const MainSection = ({
  data: {
    title,
    text,
    cards
  }
}: IProps) => {
  return (
    <Box sx={{ background: 'linear-gradient(var(--light-grey) 95%, #fff 95%)' }}>
      <Container sx={{ color: 'primary.main' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={10}>   
          <ScrollAppearOpacityMotion>
            <Box sx={{ maxWidth: '55ch', py: 5 }}>          
              <Typography fontSize={36} fontWeight={600} sx={{ mb: 2  }}>{title}</Typography>
              <Typography fontSize={14} sx={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: text }} />
            </Box>
          </ScrollAppearOpacityMotion>
          <ImageStack cardsData={cards} />
        </Stack>
      </Container>
    </Box>
  )
}