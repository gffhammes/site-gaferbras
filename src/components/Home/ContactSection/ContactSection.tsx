import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { Contact } from './Contact'
import { Text } from './Text'

interface IProps { }

export const ContactSection = (props: IProps) => {
  return (
    <Box bgcolor='#F2F2FC'>
      <Container sx={{ py: 10 }} maxWidth='md'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Text />
          <Contact />
        </Stack>        
      </Container>
    </Box>
  )
}