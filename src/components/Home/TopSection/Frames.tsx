import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { SlideFromBottomAppearMotion } from '../../common/motion/DefaultAppearMotion'

interface IProps { }

const frames = [
  {
    title: 'Manutenção',
    image: '/'
  },
  {
    title: 'Injeção & Moldes',
    image: '/'
  },
  {
    title: 'Ferramentaria',
    image: '/'
  },
  {
    title: 'Usinagem',
    image: '/'
  },
]

const sxFrame = {
  width: '100%',
  aspectRatio: '1 / 1',
  position: 'relative',
  transition: '.2s ease all',
  '&:hover': {
    transform: 'scale(1.05)',
    zIndex: 500,
    '& .overlay': {
      opacity: 1,
    }
  }
}

export const Frames = (props: IProps) => {
  return (
    <Grid container spacing={1} sx={{ position: 'relative', zIndex: 200 }} id='serviços'>
      {frames.map((frame, index) => (
        <Grid item xs={6} md={3} key={index}>
          <SlideFromBottomAppearMotion delay={((index + 1) * .4) + 1.2}>
            <Box bgcolor='#D1D4F0' sx={sxFrame}>
              <Typography fontSize={19} fontWeight={500}sx={{ color: 'white', position: 'absolute', bottom: 0, m: 2, zIndex: 200 }}>{frame.title}</Typography>
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
                    backgroundImage: 'url(/images/gaferbras-1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'overlay',
                    opacity: .52,
                  }}
                />
              </Box>
            </Box>
          </SlideFromBottomAppearMotion>
        </Grid>
      ))}
    </Grid>
  )
}