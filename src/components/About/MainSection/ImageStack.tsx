import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import PrimaryArrow from '../../../../public/vectors/arrow-up-right-primary.svg'
import SecondaryArrow from '../../../../public/vectors/arrow-up-right-secondary.svg'
import { ScrollAppearMotion } from '../../common/motion/ScrollAppearMotion'

interface IProps {
  cardsData: {
    imageSrc: string;
    redCard: {
      href: string;
      text: string;
    },
    blueCard: {
      href: string;
      text: string;
    },
  },
}

interface ICardProps {
  children: any;
  href: string;
  bgColor: 'primary' | 'secondary';
}

const cardPadding = {xs: '1.5rem', md: '3rem' }

const Card = ({ children, href, bgColor }: ICardProps) => {

  const boldConvertedString = children.replaceAll(/\*{2}(.*?)\*{2}/g, "<strong>$1</strong>");


  return (   
    <Link href={href} passHref>  
      <a>           
        <Box
          sx={{
            height: 'fit-content',
            width: '100%',
            color: 'white',
            position: 'relative',
            cursor: 'pointer',
            backgroundColor: bgColor === 'primary' ? 'primary.main' : 'secondary.main',
            '&:hover': {
              '& .arrow': {
                p: 3
              }
            },
          }}
        >
          <Typography fontSize={{ xs: 24, md: 48}} lineHeight={1} sx={{ p: cardPadding, whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: boldConvertedString }} />
          <Box className='arrow' sx={{ position: 'absolute', top: 0, right: 0, p: cardPadding, transition: '.5s ease all', }}>
            {bgColor === 'primary' ? <SecondaryArrow /> : <PrimaryArrow />}
          </Box>
        </Box>
      </a>
    </Link>
  )
}

export const ImageStack = ({
  cardsData: {
    imageSrc,
    redCard,
    blueCard,
  }
}: IProps) => {
  return (
    <Stack>
      <ScrollAppearMotion>
        <Box sx={{ position: 'relative', width: { xs: '100%', md: '33rem' }, height: '20rem' }}>        
          <Image
            src={imageSrc}
            alt='Gaferbras'
            layout='fill'
            objectFit='cover'
          />
        </Box>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={0.8}>
        <Card href={redCard.href} bgColor='secondary'>{redCard.text}</Card>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.2}>
        <Card href={blueCard.href} bgColor='primary'>{blueCard.text}</Card>
      </ScrollAppearMotion>
    </Stack>
  )
}