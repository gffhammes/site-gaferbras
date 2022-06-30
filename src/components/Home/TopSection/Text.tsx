import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronsDown from '../../../../public/vectors/chevrons-down.svg'

interface IProps { }

const HomeTopSectionText = 'Atuando há mais de 25 anos com excelência no mercado industrial!'

export const Text = (props: IProps) => {
  return (
    <Box sx={{ maxWidth: { xs: '100%', md: '45ch'}, pt: 10, mb: 6 }}>
      <Typography fontSize={24} fontWeight={600} sx={{ color: 'secondary.main' }}>Gaferbras</Typography>
      <Typography fontSize={50} fontWeight={500} lineHeight={1.3} sx={{ color: 'primary.main', mb: 6 }}>{HomeTopSectionText}</Typography>
      <Stack direction='row' alignItems='center' spacing={1}>
        <ChevronsDown />
        <Typography  fontSize={14} fontWeight={600} sx={{ color: 'secondary.main' }}>Conheça mais</Typography>
      </Stack>
    </Box>
  )
}