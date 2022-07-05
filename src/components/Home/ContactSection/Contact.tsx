import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Phone from '../../../../public/vectors/phone.svg'
import MapPin from '../../../../public/vectors/map-pin.svg'
import Mail from '../../../../public/vectors/mail.svg'
import { mapsLink } from '../../../constants/links'
import { ScrollAppearMotion } from '../../common/motion/ScrollAppearMotion'

interface IProps { }

export const Contact = (props: IProps) => {
  return (
    <Stack spacing={3} sx={{ color: 'primary.main' }}>
      <ScrollAppearMotion delay={.8}>
        <a href='tel: 47 3439 1500' rel="noreferrer" style={{ width: 'fit-content' }}> 
          <Stack spacing={2} direction='row' alignItems='flex-end'>
            <Phone />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Typography fontSize={20} fontWeight={500} lineHeight={1.3} sx={{ mr: 1 }}>47</Typography>
              <Typography fontSize={30} fontWeight={500} lineHeight={1}>3439 1500</Typography>
            </Box>
          </Stack>
        </a>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.2}>
        <a href={mapsLink} target='_blank' rel="noreferrer" style={{ width: 'fit-content' }}>
          <Stack spacing={2} direction='row' alignItems='center'>
            <MapPin />
            <Typography fontSize={21} >R. Santa Edwiges, 272 - Vila Nova<br/>89237-210 - Joinville/SC</Typography>
          </Stack>
        </a>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.6}>
        <a href='mailto:contato@gaferbras.com.br' target='_blank' rel="noreferrer" style={{ width: 'fit-content' }}>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Mail />
            <Typography fontSize={21} >contato@gaferbras.com.br</Typography>
          </Stack>
        </a>
      </ScrollAppearMotion>

      
    </Stack>
  )
}