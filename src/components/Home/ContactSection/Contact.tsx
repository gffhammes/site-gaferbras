import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Phone from '../../../../public/vectors/phone.svg'
import MapPin from '../../../../public/vectors/map-pin.svg'
import Mail from '../../../../public/vectors/mail.svg'
import { mapsLink } from '../../../constants/links'
import { ScrollAppearMotion } from '../../common/motion/ScrollAppearMotion'
import { useFetch } from '../../../hooks/useFetch'

interface IProps {
  data: any;
}

export const Contact = ({ data }: IProps) => {

  console.log(data)

  return (
    <Stack spacing={3} sx={{ color: 'primary.main' }}>
      <ScrollAppearMotion delay={.8}>
        <a href={`tel: ${data?.data.attributes.telefone}`} rel="noreferrer" style={{ width: 'fit-content' }}> 
          <Stack spacing={2} direction='row' alignItems='flex-end'>
            <Phone />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Typography fontSize={20} fontWeight={500} lineHeight={1.3} sx={{ mr: 1 }}>{data?.data.attributes.telefone.slice(0, 2)}</Typography>
              <Typography fontSize={30} fontWeight={500} lineHeight={1}>{data?.data.attributes.telefone.slice(2, 6)} {data?.data.attributes.telefone.slice(6, 11)}</Typography>
            </Box>
          </Stack>
        </a>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.2}>
        <a href={mapsLink} target='_blank' rel="noreferrer" style={{ width: 'fit-content' }}>
          <Stack spacing={2} direction='row' alignItems='center'>
            <MapPin />
            <Typography fontSize={21} sx={{ maxWidth: '25ch' }} >{data?.data.attributes.endereco}</Typography>
          </Stack>
        </a>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.6}>
        <a href={`mailto:${data?.data.attributes.email}`} target='_blank' rel="noreferrer" style={{ width: 'fit-content' }}>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Mail />
            <Typography fontSize={21} >{data?.data.attributes.email}</Typography>
          </Stack>
        </a>
      </ScrollAppearMotion>

      
    </Stack>
  )
}