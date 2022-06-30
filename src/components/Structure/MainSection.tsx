import { Box, Container } from '@mui/material'
import React from 'react'
import { TitleAndText } from '../common/TitleAndText'
import { StructureGrid } from './StructureGrid'

interface IProps { }

export const MainSection = (props: IProps) => {
  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 10 }}>        
        <TitleAndText
          title='Estrutura'
          text='Para suprir a sua necessidade contamos com um parque fabril completo de <strong>140m²</strong>'
        />
        <StructureGrid />
      </Container>
    </Box>
  )
}