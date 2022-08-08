import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { Contact } from './Contact'
import { Text } from './Text'

interface IProps {
  data: {
    text: string;
  }
}

export const ContactSection = ({
  data: {
    text
  }
}: IProps) => {
  const { data: contactData } = useFetch<any>('/dados-empresa');

  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 10 }} maxWidth='md'>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={8}
          sx={{ width: 'fit-content', mx: 'auto' }}
        >
          <Text text={text} whatsapp={contactData?.data.attributes.whatsapp} />
          <Contact data={contactData} />
        </Stack>        
      </Container>
    </Box>
  )
}