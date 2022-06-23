import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Frames } from './Frames'
import { Image } from './Image'
import { Text } from './Text'

interface IProps { }


export const TopSection = (props: IProps) => {
  return (
    <Box bgcolor='#F8F8FD'>
      <Container>
        <Text />
        <Frames />
      </Container>
      <Image />
    </Box>
  )
}