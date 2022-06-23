import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

interface IProps { }

export const Text = (props: IProps) => {
  return (
    <Box>
      <Typography
        fontSize={40}
        lineHeight={1.3}
        sx={{
          maxWidth: '14ch',
          color: 'primary.main',
        }}
      >
        Entre em contato e solicite o seu <strong>orçamento!</strong>
      </Typography>
    </Box>
  )
}