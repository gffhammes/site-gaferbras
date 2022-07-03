import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { Contact } from './Contact'
import { Text } from './Text'

interface IProps { }

export const ContactSection = (props: IProps) => {
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
          <Text />
          <Contact />
        </Stack>        
      </Container>
    </Box>
  )
}