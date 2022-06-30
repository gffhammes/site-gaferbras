import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronsDown from '../../../../public/vectors/chevrons-down.svg'
import { scrollToTarget } from '../../../helpers/scrollToTarget'

interface IProps { }

const HomeTopSectionText = 'Atuando há mais de 25 anos com excelência no mercado industrial!'

export const Text = (props: IProps) => {
  return (
    <Box sx={{ maxWidth: { xs: '100%', md: '50ch'}, pt: { xs: 5, md: 10 }, mb: 6 }}>
      <Typography fontSize={{ xs: 16, sm: 19, md: 24 }} fontWeight={600} sx={{ color: 'secondary.main' }}>Gaferbras</Typography>
      <Typography variant='h1' sx={{ color: 'primary.main', mb: 6 }}>{HomeTopSectionText}</Typography>
      <Stack direction='row' alignItems='center' spacing={1} sx={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => scrollToTarget('serviços')}>
        <ChevronsDown /*className='float' */ />
        <Typography fontSize={14} fontWeight={600} sx={{ color: 'secondary.main' }}>Conheça mais</Typography>
      </Stack>
    </Box>
  )
}