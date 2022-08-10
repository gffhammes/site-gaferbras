import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { TitleAndText } from '../common/TitleAndText'
import { ContactForm } from './ContactForm'

interface IProps {
  data: any;
  recipientMail: string;
}

export const MainSection = ({ data, recipientMail }: IProps) => {
  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 10 }} maxWidth='md'>
        <TitleAndText
          title={data.attributes.titulo}
          text={data.attributes.h1} 
        />
        <ContactForm recipientMail={recipientMail} />
      </Container>
    </Box>
  )
}