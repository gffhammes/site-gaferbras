import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { DefaultAppearMotion } from '../../common/motion/DefaultAppearMotion'

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

export const Frames = (props: IProps) => {
  return (
    <Grid container spacing={1} sx={{ position: 'relative', zIndex: 200 }} id='serviços'>
      {frames.map((frame, index) => (
        <Grid item xs={6} md={3} key={index}>
          <DefaultAppearMotion delay={((index + 1) * .4) + 1.2}>
            <Box bgcolor='#D1D4F0' sx={{ width: '100%', aspectRatio: '1 / 1', position: 'relative' }}>
              <Typography fontSize={19} fontWeight={500}sx={{ color: 'white', position: 'absolute', bottom: 0, m: 2 }}>{frame.title}</Typography>
            </Box>
          </DefaultAppearMotion>
        </Grid>
      ))}
    </Grid>
  )
}