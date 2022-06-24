import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryArrow from '../../../../public/vectors/arrow-up-right-primary.svg'
import SecondaryArrow from '../../../../public/vectors/arrow-up-right-secondary.svg'

interface IProps { }

interface ICardProps {
  children: any;
  bgColor: 'primary' | 'secondary';
}

const cardPadding = '3rem'

const Card = ({ children, bgColor }: ICardProps) => {
  return (    
    <Box
      bgcolor={bgColor === 'primary' ? 'primary.main' : 'secondary.main'}
      sx={{
        height: 'fit-content',
        width: '100%',
        color: 'white',
        position: 'relative',
      }}
    >
      <Typography fontSize={48} lineHeight={1} sx={{ p: cardPadding }}>{children}</Typography>
      <Box sx={{ position: 'absolute', top: 0, right: 0, p: cardPadding }}>
        {bgColor === 'primary' ? <SecondaryArrow /> : <PrimaryArrow />}
      </Box>
    </Box>
  )
}

export const ImageStack = (props: IProps) => {
  return (
    <Stack>
      <Box sx={{ position: 'relative', width: '33rem', height: '20rem' }}>        
        <Image
          src='/images/gaferbras-1.jpg'
          alt='Gaferbras'
          layout='fill'
          objectFit='cover'
        />
      </Box>
      <Card bgColor='secondary'>Mais de<br/><strong>25 anos</strong> de<br/>história</Card>
      <Card bgColor='primary'>Mais de<br/><strong>1500 projetos</strong><br/>desenvolvidos</Card>
    </Stack>
  )
}