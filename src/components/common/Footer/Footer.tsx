import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useContext, useMemo } from 'react'
import { pages } from '../../../constants/pages'
import Facebook from '../../../../public/vectors/facebook.svg'
import Instagram from '../../../../public/vectors/instagram.svg'
import Linkedin from '../../../../public/vectors/linkedin.svg'
import Image from 'next/image'
import { Copyright } from './Copyright'
import { mapsLink } from '../../../constants/links'
import { BackToTop } from './BackToTop'
import { ContactContext } from '../../../contexts/Contact/ContactContext'

interface IProps { }

const titleProps = {
  sx: { mb: 1 },
  fontSize: 16,
  fontWeight: 600
}

export const Footer = (props: IProps) => {
  const contactContext = useContext(ContactContext);

  const infosMemo = useMemo(() => {
    return (
      [
        {
          text: contactContext.address,
          href: mapsLink,
        },
        {
          text: contactContext.formattedPhone,
          href: `tel:${contactContext.phone}`,
        },
        {
          text: contactContext.defaultMail,
          href: `mailto:${contactContext.defaultMail}`,
        },
        {
          text: contactContext.cnpj,
          href: null,
        },
      ]
    )
  }, [contactContext])

  const socials = useMemo(() => {
    return (
      [
        {
          vector: <Facebook />,
          href: contactContext.facebookUrl,
        },
        {
          vector: <Instagram />,
          href: contactContext.instagramUrl,
        },
        {
          vector: <Linkedin />,
          href: contactContext.linkedinUrl,
        },
      ]
    )
  }, [contactContext.facebookUrl, contactContext.instagramUrl, contactContext.linkedinUrl])

  return (
    <Box component='footer'>
      <BackToTop />
      <Box bgcolor='primary.main'>
        <Container sx={{ py: 5, color: 'white' }}>
          <Box sx={{ position: 'relative', height: '6rem', width: '14rem', mb: { xs: 5, md: 2} }}>
            <Image
              src='/images/gaferbras-logo-negativa.png'
              alt='Gaferbras'
              layout='fill'
              objectFit='contain'
              objectPosition='left'
            />
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={2.5} md={5}>
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
            <Grid item xs={12} sm={5} md={4}>
              <Typography {...titleProps}>Informações</Typography>
              <Stack spacing={1}>              
                {infosMemo.map(info => {
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
            <Grid item xs={12} sm={4.5} md={3}>
              <Stack justifyContent='space-between' sx={{ height: '100%' }}>              
                <Box>
                  <Typography {...titleProps}>Trabalhe conosco</Typography>
                  <Box sx={{ width: 'fit-content' }}>                               
                    <Link href={`mailto:${contactContext.recruitingMail}`} passHref>
                      <a target='_blank' style={{ width: 'fit-content' }}>
                        <Typography sx={{ width: 'fit-content' }}>{contactContext.recruitingMail}</Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Typography {...titleProps}>Redes sociais</Typography>
                  <Stack direction='row' spacing={2}>
                    {socials.map((social, index) => (
                      <Link href={social.href ?? ""} key={index} passHref>
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
      <Copyright />
    </Box>
  )
}