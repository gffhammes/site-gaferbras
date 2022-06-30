import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from './NavLinks'

interface IProps { }

const Logo = () => {
  return (
    <Link href='/' passHref>
      <a>                
        <Box sx={{ position: 'relative', height: { xs: '3rem', sm: '4rem', md: '6rem' }, width: '10rem' }}>
          <Image
            src='/images/gaferbras-logo.png'
            alt='Gaferbras'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </Box>
      </a>
    </Link>
  )
}

export const NavBar = (props: IProps) => {

  return (
    <Box component='header'>
      <Container sx={{ py: 2 }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>  
          <Logo />
          <NavLinks />
        </Stack>
      </Container>
    </Box>
  )
}