import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import ChevronsDown from '../../../../public/vectors/chevrons-down.svg'
import { scrollToTarget } from '../../../helpers/scrollToTarget'

interface IProps { }

const HomeTopSectionText = 'Atuando há mais de 25 anos com excelência no mercado industrial!'

const DefaultMotion = ({ children, delay }: any) => {
  const variants = {
    hidden: { opacity: 0, x: -50, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        type: "tween",
        stiffness: 100,
        default: { duration: .5 },
      }
    },    
  }

  return (
    <motion.div initial='hidden' animate='visible' variants={variants}>
      {children}
    </motion.div>
  )
}

export const Text = (props: IProps) => {
  return (
    <Box sx={{ maxWidth: { xs: '100%', md: '50ch'}, pt: { xs: 5, md: 10 }, mb: 6 }}>
      <DefaultMotion delay={.4}>
        <Typography fontSize={{ xs: 16, sm: 19, md: 24 }} fontWeight={600} sx={{ color: 'secondary.main' }}>Gaferbras</Typography>
      </DefaultMotion>
      <DefaultMotion delay={.8}>        
        <Typography variant='h1' sx={{ color: 'primary.main', mb: 6 }}>{HomeTopSectionText}</Typography>
      </DefaultMotion>
      <DefaultMotion delay={1.2}>  
        <Stack direction='row' alignItems='center' spacing={1} sx={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => scrollToTarget('serviços')}>
          <ChevronsDown /*className='float' */ />
          <Typography fontSize={14} fontWeight={600} sx={{ color: 'secondary.main' }}>Conheça mais</Typography>
        </Stack>
      </DefaultMotion>
    </Box>
  )
}