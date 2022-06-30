import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useBreakPoint } from '../../../hooks/useBreakPoint'
import { Frames } from './Frames'
import { LeftImage } from './LeftImage'
import { Text } from './Text'

interface IProps { }


export const TopSection = (props: IProps) => {
  const { mdSize } = useBreakPoint();

  return (
    <Box bgcolor='#F8F8FD' sx={{ position: 'relative' }}>
      <Container>
        <Text />
        <Frames />
      </Container>
      {mdSize && <LeftImage />}
    </Box>
  )
}