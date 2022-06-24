import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { pages } from '../../constants/pages'

interface IProps { }

export const NavBar = (props: IProps) => {
  const { asPath } = useRouter();

  return (
    <Box component='header'>
      <Container sx={{ py: 2 }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Box>
            <Link href='/' passHref>
              <a>                
                <Box sx={{ position: 'relative', height: '6rem', width: '14rem' }}>
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
          </Box>
          <Box component='nav'>
            <Stack direction='row' component='ul' spacing={4} sx={{ listStyle: 'none' }}>
              {pages.map(page => {
                const isActivePage: boolean = asPath === page.route;
                return (
                  <Box component='li' key={page.title} sx={{ height: '3rem', borderBottom: isActivePage ? '1px solid var(--red)' : 'none' }}>
                    <Link href={page.route} passHref>
                      <a>                    
                        <Typography fontSize={20} fontWeight={isActivePage ? 600 : 400} sx={{ color: 'primary.main' }}>{page.title}</Typography>
                      </a>
                    </Link>
                  </Box>
                )
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}