import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { pages } from '../../constants/pages'
import Facebook from '../../../public/vectors/facebook.svg'
import Instagram from '../../../public/vectors/instagram.svg'
import Linkedin from '../../../public/vectors/linkedin.svg'
import Image from 'next/image'

interface IProps { }

const infos = [
  {
    text: `Rua Santa Edviges, 272 - Vila Nova
89237-210 - Joinville/SC`,
    href: 'https://www.google.com/maps/place/Gaferbras+Industrial+Ltda/@-26.2850799,-48.9002685,15z/data=!4m2!3m1!1s0x0:0xb4f8d06489b44dd4?sa=X&ved=2ahUKEwiE2PzYisT4AhVYDrkGHaCMCK0Q_BJ6BAgzEAU',
  },
  {
    text: '(47) 3433-1500',
    href: 'tel: (47) 3433-1500',
  },
  {
    text: 'gaferbras@gaferbras.com.br',
    href: 'mailto:gaferbras@gaferbras.com.br',
  },
  {
    text: 'CNPJ: 01.004.509/0001-75',
    href: null,
  },
]

const socials = [
  {
    vector: <Facebook />,
    href: 'https://www.facebook.com/pages/Gaferbras-Industrial/246265889277621',
  },
  {
    vector: <Instagram />,
    href: '/',
  },
  {
    vector: <Linkedin />,
    href: '/',
  },
]

const titleProps = {
  sx: { mb: 1 },
  fontSize: 16,
  fontWeight: 600
}

export const Footer = (props: IProps) => {
  return (
    <Box component='footer'>    
      <Box bgcolor='primary.main'>
        <Container sx={{ py: 5, color: 'white' }}>
          <Box sx={{ position: 'relative', height: '6rem', width: '14rem', mb: 2 }}>
            <Image
              src='/images/gaferbras-logo-negativa.png'
              alt='Gaferbras'
              layout='fill'
              objectFit='contain'
              objectPosition='left'
            />
          </Box>
          <Grid container>
            <Grid item xs={5}>
              <Stack spacing={1}>                
                {pages.slice(0, pages.length - 1).map(page => (
                    <Box key={page.title} sx={{ width: 'fit-content' }}>
                      <Link href={page.route} passHref>
                        <a style={{ width: 'fit-content' }}>
                          <Typography sx={{ width: 'fit-content' }}>{page.title}</Typography>
                        </a>
                      </Link>
                    </Box>
                  ))
                }
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Typography {...titleProps}>Informações</Typography>
              <Stack spacing={1}>              
                {infos.map(info => {
                  return info.href
                    ? (
                        <Box key={info.text} sx={{ width: 'fit-content' }}>                      
                          <Link href={info.href} passHref>
                            <a target='_blank' style={{ width: 'fit-content' }}>
                              <Typography fontSize={14} sx={{ width: 'fit-content', whiteSpace: 'pre-wrap' }}>{info.text}</Typography>
                            </a>
                          </Link>
                        </Box>
                      )
                    : (
                        <Typography fontSize={14} key={info.text}>{info.text}</Typography>
                      )
                })}
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack justifyContent='space-between' sx={{ height: '100%' }}>              
                <Box>
                  <Typography {...titleProps}>Trabalhe conosco</Typography>
                  <Box sx={{ width: 'fit-content' }}>                               
                    <Link href='mailto:contato@gaferbras.com.br' passHref>
                      <a target='_blank' style={{ width: 'fit-content' }}>
                        <Typography sx={{ width: 'fit-content' }}>contato@gaferbras.com.br</Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Typography {...titleProps}>Redes sociais</Typography>
                  <Stack direction='row' spacing={2}>
                    {socials.map((social, index) => (
                      <Link href={social.href} key={index} passHref>
                        <a target='_blank'>
                          {social.vector}
                        </a>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor='#2D38FC'>
        <Container sx={{ py: 1, color: 'white' }}>          
          <Typography fontSize={12} textAlign='center'>Todos os direitos estão reservados</Typography>
        </Container>
      </Box>
    </Box>
  )
}