import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import ChevronsDown from '../../../../public/vectors/chevrons-down.svg'
import { scrollToTarget } from '../../../helpers/scrollToTarget'
import { SlideFromLeftAppearMotion } from '../../common/motion/DefaultAppearMotion'

interface IProps { }

const HomeTopSectionText = 'Atuando há mais de 25 anos com excelência no mercado industrial!'

const sxMoreButton = {
  cursor: 'pointer',
  width: 'fit-content',
  '&:hover': {
    '& > p::before': {
      transform: 'translateX(100%)'
    }
  }
}

const sxMoreButtonText = {
  color: 'secondary.main',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    height: 'calc(100% - 2px)',
    width: '100%',
    borderBottom: '2px solid var(--secondary)',
    transition: '.3s ease all',
    left: '-100%',
  }
}

export const Text = (props: IProps) => {
  return (
    <Box sx={{ maxWidth: { xs: '100%', md: '50ch'}, pt: { xs: 5, md: 10 }, mb: 6 }}>
      <SlideFromLeftAppearMotion delay={.4}>
        <Typography fontSize={{ xs: 16, sm: 19, md: 24 }} fontWeight={600} sx={{ color: 'secondary.main' }}>Gaferbras</Typography>
      </SlideFromLeftAppearMotion>
      <SlideFromLeftAppearMotion delay={.8}>        
        <Typography variant='h1' sx={{ color: 'primary.main', mb: 6 }}>{HomeTopSectionText}</Typography>
      </SlideFromLeftAppearMotion>
      <SlideFromLeftAppearMotion delay={1.2}>  
        <Stack direction='row' alignItems='center' spacing={1} sx={sxMoreButton} onClick={() => scrollToTarget('serviços')}>
          <ChevronsDown /*className='float' */ />
          <Typography fontSize={14} fontWeight={600} sx={sxMoreButtonText}>Conheça mais</Typography>
        </Stack>
      </SlideFromLeftAppearMotion>
    </Box>
  )
}