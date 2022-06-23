import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Frames } from './Frames'
import { LeftImage } from './LeftImage'
import { Text } from './Text'

interface IProps { }


export const TopSection = (props: IProps) => {
  return (
    <Box bgcolor='#F8F8FD' sx={{ position: 'relative' }}>
      <Container>
        <Text />
        <Frames />
      </Container>
      <LeftImage />
    </Box>
  )
}