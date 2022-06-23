import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Phone from '../../../../public/vectors/phone.svg'
import MapPin from '../../../../public/vectors/map-pin.svg'
import Mail from '../../../../public/vectors/mail.svg'

interface IProps { }

export const Contact = (props: IProps) => {
  return (
    <Stack spacing={3} sx={{ color: 'primary.main' }}>
      <Stack spacing={2} direction='row'>
        <Phone />
        <Typography fontSize={24} fontWeight={500}>47 3439 1500</Typography>
      </Stack>
      <Stack spacing={2} direction='row' alignItems='center'>
        <MapPin />
        <Typography fontSize={20} fontWeight={500}>R. Santa Edwiges, 272 - Vila Nova<br/>89237-210 - Joinville/SC</Typography>
      </Stack>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Mail />
        <Typography fontSize={20} fontWeight={500}>contato@gaferbras.com.br</Typography>
      </Stack>
    </Stack>
  )
}