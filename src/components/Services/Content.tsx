import { Box, Container, Typography } from '@mui/material'
import React from 'react'

interface IProps {
  selectedOption: any;
}

export const Content = ({ selectedOption }: IProps) => {
  return (
    <Box>
      <Typography>{selectedOption.title}</Typography>
    </Box>
  )
}