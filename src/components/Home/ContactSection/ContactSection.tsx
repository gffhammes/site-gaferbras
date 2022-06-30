import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { Contact } from './Contact'
import { Text } from './Text'

interface IProps { }

export const ContactSection = (props: IProps) => {
  return (
    <Box bgcolor='var(--light-grey)'>
      <Container sx={{ py: 10 }} maxWidth='md'>
        <Stack direction={{ xs: 'column', md: 'row'}} justifyContent='space-between' alignItems='center' spacing={8}>
          <Text />
          <Contact />
        </Stack>        
      </Container>
    </Box>
  )
}