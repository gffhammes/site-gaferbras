import { Box, Container } from '@mui/material'
import React from 'react'
import { SlideFromLeftAppearMotion } from '../common/motion/DefaultAppearMotion'
import { TitleAndText } from '../common/TitleAndText'
import { ICardProps, StructureGrid } from './StructureGrid'

interface IProps {
  data: {
    title: string;
    h1: string;
    cards: ICardProps[];
  }
}

export const MainSection = ({
  data: {
    title,
    h1,
    cards,
  }
}: IProps) => {
  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 10 }}>      
        <SlideFromLeftAppearMotion delay={.4}>
          <TitleAndText
            title={title}
            text={h1}
          />
        </SlideFromLeftAppearMotion>  
        <StructureGrid cards={cards}/>
      </Container>
    </Box>
  )
}