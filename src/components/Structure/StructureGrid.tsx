import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { DefaultGridItem } from './DefaultGridItem'

interface ICardProps {
  imageSrc: string;
  text: string;
}

export interface ICardsProps {
  card1: ICardProps;
  card2: ICardProps;
  card3: ICardProps;
  card4: ICardProps;
  card5: ICardProps;
  card6: ICardProps;
  card7: ICardProps;
  card8: ICardProps;
}

interface IProps {
  cards: ICardsProps;
}

export const StructureGrid = ({  
  cards: {
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
  }
}: IProps) => {
  const delay= .4;
  return (
    <Grid container spacing={2} >
      <DefaultGridItem xs={12} md={7.5} image={card1.imageSrc} text={card1.text} delay={1 * delay} height />

      <Grid item xs={12} md={2.25} container spacing={2}>        
        <DefaultGridItem xs={12} image={card2.imageSrc} text={card2.text} delay={2 * delay} />
        <DefaultGridItem xs={12} image={card3.imageSrc} text={card3.text} delay={3 * delay} />
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <DefaultGridItem xs={12} image={card4.imageSrc} text={card4.text} delay={4 * delay} />
        <DefaultGridItem xs={12} image={card5.imageSrc} text={card5.text} delay={5 * delay} />
      </Grid>
      <Grid item xs={12} md={3}> 
        <DefaultGridItem xs={12} image={card6.imageSrc} text={card6.text} delay={6 * delay} />
      </Grid>
      <Grid item xs={12} md={3}>
        <DefaultGridItem xs={12} image={card7.imageSrc} text={card7.text} delay={7 * delay} />
      </Grid>
      <DefaultGridItem xs={12} md={6} image={card8.imageSrc} text={card8.text} delay={8 * delay} height />
    </Grid>
  )
}