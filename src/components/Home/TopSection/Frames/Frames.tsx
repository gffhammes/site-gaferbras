import { Grid } from '@mui/material'
import React from 'react'
import { Frame } from './Frame';

interface IProps {  
  cards: {
    imageSrc: string;
    text: string;
  }[],
}

export const Frames = ({ cards }: IProps) => {
  return (
    <Grid container spacing={1} sx={{ position: 'relative', zIndex: 200 }} id='serviços'>
      {cards.map((card, index) => (
        <Grid key={index} item xs={6} md={3}>
          <Frame            
            delay={((index + 1) * .4) + 1.2}
            cardData={card}
          />
        </Grid>
      ))}
    </Grid>
  )
}