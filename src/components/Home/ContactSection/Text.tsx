import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Button from '../../common/Button'
import WhatsApp from '../../../../public/vectors/whatsapp.svg'

interface IProps { }

export const Text = (props: IProps) => {
  return (
    <Box>
      <Typography
        fontSize={44}
        lineHeight={1.3}
        sx={{
          maxWidth: '14ch',
          color: 'primary.main',
          mb: 2
        }}
      >
        Entre em contato e solicite o seu <strong>orçamento!</strong>
      </Typography>
      <Button startIcon={<WhatsApp />}>WhatsApp</Button>
    </Box>
  )
}