import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { SlideFromBottomAppearMotion } from '../../../common/motion/DefaultAppearMotion'

interface IProps {
  delay: number;
  cardData: {
    text: string;
    imageSrc: string;
  };
}

const sxFrame = {
  width: '100%',
  aspectRatio: '1 / 1',
  position: 'relative',
  transition: '.2s ease all',
  color: '#3F3C9A',
  '&:hover': {
    color: 'white',
    transform: 'scale(1.05)',
    zIndex: 500,
    '& .overlay': {
      opacity: 1,
    }
  }
}

const sxText = {
  position: 'absolute',
  bottom: 0,
  m: 2,
  zIndex: 200,
}

export const Frame = ({
  delay,
  cardData
}: IProps) => {
  return (
    <SlideFromBottomAppearMotion delay={delay}>
      <Box bgcolor='#D1D4F0' sx={sxFrame}>
        <Typography fontSize={19} fontWeight={500} sx={sxText}>{cardData.text}</Typography>
          <Box
            className='frame-image'
            sx={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundImage: `url(${cardData.imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(0)',
              opacity: .2,
            }}
          />
        <Box className='overlay' sx={{ position: 'absolute', height: '100%', width: '100%', transition: 'opacity .2s ease', opacity: 0 }}>
          <Box
            className='frame-overlay'
            sx={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: '#E83924',
            }}
          />
          <Box
            className='frame-image'
            sx={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundImage: `url(${cardData.imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay',
              opacity: .52,
            }}
          />
        </Box>
      </Box>
    </SlideFromBottomAppearMotion>
  )
}