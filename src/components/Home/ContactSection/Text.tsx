import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Button from '../../common/Button'
import WhatsApp from '../../../../public/vectors/whatsapp.svg'
import { ScrollAppearMotion } from '../../common/motion/ScrollAppearMotion'
import Link from 'next/link'

interface IProps {
  text: string;
  whatsapp: string;
}

export const Text = ({ text, whatsapp }: IProps) => {
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
      <Link href={`https://wa.me/${whatsapp}`} passHref>
        <a target='_blank'>          
          <Button startIcon={<WhatsApp />}>WhatsApp</Button>
        </a>
      </Link>
    </ScrollAppearMotion>
  )
}