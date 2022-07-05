import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryArrow from '../../../../public/vectors/arrow-up-right-primary.svg'
import SecondaryArrow from '../../../../public/vectors/arrow-up-right-secondary.svg'
import { ScrollAppearMotion } from '../../common/motion/ScrollAppearMotion'

interface IProps { }

interface ICardProps {
  children: any;
  bgColor: 'primary' | 'secondary';
}

const cardPadding = {xs: '1.5rem', md: '3rem' }

const Card = ({ children, bgColor }: ICardProps) => {
  return (    
    <Box
      bgcolor={bgColor === 'primary' ? 'primary.main' : 'secondary.main'}
      sx={{
        height: 'fit-content',
        width: '100%',
        color: 'white',
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
          '& .arrow': {
            p: 3
          }
        },
      }}
    >
      <Typography fontSize={{ xs: 24, md: 48}} lineHeight={1} sx={{ p: cardPadding }}>{children}</Typography>
      <Box className='arrow' sx={{ position: 'absolute', top: 0, right: 0, p: cardPadding, transition: '.5s ease all', }}>
        {bgColor === 'primary' ? <SecondaryArrow /> : <PrimaryArrow />}
      </Box>
    </Box>
  )
}

export const ImageStack = (props: IProps) => {
  return (
    <Stack>
      <ScrollAppearMotion>
        <Box sx={{ position: 'relative', width: { xs: '100%', md: '33rem' }, height: '20rem' }}>        
          <Image
            src='/images/gaferbras-1.jpg'
            alt='Gaferbras'
            layout='fill'
            objectFit='cover'
          />
        </Box>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={0.8}>
        <Card bgColor='secondary'>Mais de<br/><strong>25 anos</strong> de<br/>história</Card>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.2}>
        <Card bgColor='primary'>Mais de<br/><strong>1500 projetos</strong><br/>desenvolvidos</Card>
      </ScrollAppearMotion>
    </Stack>
  )
}