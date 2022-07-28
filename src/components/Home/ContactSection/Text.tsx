import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Button from '../../common/Button'
import WhatsApp from '../../../../public/vectors/whatsapp.svg'
import { ScrollAppearMotion } from '../../common/motion/ScrollAppearMotion'

interface IProps {
  text: string;
}

export const Text = ({ text }: IProps) => {
  return (
    <ScrollAppearMotion>
      <Typography
        fontSize={50}
        lineHeight={1.3}
        sx={{
          maxWidth: '14ch',
          color: 'primary.main',
          mb: 2
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Button startIcon={<WhatsApp />}>WhatsApp</Button>
    </ScrollAppearMotion>
  )
}