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

          <DefaultGridItem
            xs={12}
            md={7.5}
            image={cards[0].imageSrc}
            text={cards[0].text}
            delay={0.4}
            height
          />

          <Grid item xs={12} md={4.5} container spacing={2}>
            {cards.slice(1, 5).map((card: ICardProps, index: number) => {
              return (
                <DefaultGridItem
                  key={index}
                  xs={6}
                  md={6}
                  image={card.imageSrc}
                  text={card.text}
                  delay={0.4}
                />
              )
            })}
          </Grid>
          
          {cards.slice(5, 7).map((card: ICardProps, index: number) => (
            <DefaultGridItem
              key={index}
              xs={12}
              md={3}
              image={card.imageSrc}
              text={card.text}
              delay={0.4}
            />
          ))}
          
          {cards[7] && <DefaultGridItem
            xs={12}
            md={6}
            image={cards[7].imageSrc}
            text={cards[7].text}
            delay={0.4}
            height
          />}

        </Grid>
      ))}
    </Grid>
  )
}