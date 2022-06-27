import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { TitleAndText } from '../common/TitleAndText'
import { ContactForm } from './ContactForm'

interface IProps { }

export const MainSection = (props: IProps) => {
  return (
    <Box bgcolor='#F2F2FC'>
      <Container sx={{ py: 10 }}>
        <TitleAndText
          title='Contato'
          text='Mande sua mensagem que responderemos o mais rápido possível!'  
        />
        <ContactForm />
      </Container>
    </Box>
  )
}