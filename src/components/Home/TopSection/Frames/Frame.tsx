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
    '& .frame-overlay': {
      opacity: 1,
    }
  }
}

const sxRedOverlay = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: '#E83924',
  opacity: 0,
  transition: 'opacity .2s ease',
}

const sxImage = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'saturate(0)',
  mixBlendMode: 'overlay',
  opacity: .5,
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
        <Box className='frame-overlay' sx={sxRedOverlay} />
        <Box className='frame-image' sx={{ ...sxImage, backgroundImage: `url(${cardData.imageSrc})`, }} />
      </Box>
    </SlideFromBottomAppearMotion>
  )
}