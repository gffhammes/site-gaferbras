import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { DefaultGridItem } from './DefaultGridItem'

export interface ICardProps {
  imageSrc: string;
  text: string;
}

interface IProps {
  cards: ICardProps[];
}

export const StructureGrid = ({ cards }: IProps) => {
  const delay= .4;

  const cardsOrganizationArray: any[] = [];

  const temporaryArray: any[] = []

  cards.forEach((card, index) => {
    temporaryArray.push(card)
    if ((index !== 0 && (index + 1) % 8 === 0) || index === cards.length - 1) {
      cardsOrganizationArray.push([...temporaryArray])
      temporaryArray.length = 0;
    }
  })

  return (
    <Grid container spacing={2}>
      {cardsOrganizationArray.map((cards, index) => (        
        <Grid item container spacing={2} key={index} >
          <Grid item xs={7.5}>
            <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
              <Image
                src={cards[0].imageSrc}
                alt={cards[0].text}
                layout='fill'
                objectFit='cover'
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4.5} container spacing={2}>
            {cards.slice(1, 5).map((card, index) => {
              return (
                <Grid item xs={6} key={index}>
                  <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1 / 1' }}>
                    <Image
                      src={card.imageSrc}
                      alt={card.text}
                      layout='fill'
                      objectFit='cover'
                    />
                  </Box>
                </Grid>
              )
            })}
          </Grid>

          
          {cards.slice(5, 8).map((card, index) => {
            return (
              <Grid item xs={index === 2 ? 6 : 3} key={index}>
                <Box sx={{ position: 'relative', height: index === 2 ? '100%' : 'unset', aspectRatio: index === 2 ? 'unset' : '1 / 1', width: '100%' }}>
                  <Image
                    src={card.imageSrc}
                    alt={card.text}
                    layout='fill'
                    objectFit='cover'
                  />
                </Box>
              </Grid>
            )
          })}



          {/* <DefaultGridItem xs={12} md={7.5} image={card1.imageSrc} text={card1.text} delay={1 * delay} height />

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
          <DefaultGridItem xs={12} md={6} image={card8.imageSrc} text={card8.text} delay={8 * delay} height /> */}
        </Grid>
      ))}
    </Grid>
  )
}