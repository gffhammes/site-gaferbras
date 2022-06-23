import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { pages } from '../../constants/pages'

interface IProps { }

export const NavBar = (props: IProps) => {
  const { asPath } = useRouter();

  return (
    <Box>
      <Container>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Box>
            <Link href='/' passHref>
              <a>                
                <Box>
                  <Typography variant='h1'>LOGO</Typography>
                </Box>
              </a>
            </Link>
          </Box>
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
        </Stack>
      </Container>
    </Box>
  )
}