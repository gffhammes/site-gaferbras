import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { pages } from '../../constants/pages'

interface IProps { }

export const NavBar = (props: IProps) => {
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
            {pages.map(page => (
              <Box component='li' key={page.title}>
                <Link href={page.route} passHref>
                  <a>                    
                    <Typography>{page.title}</Typography>
                  </a>
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}