import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useMemo } from 'react'
import { pages } from '../../../constants/pages'
import { useRouter } from 'next/router'
import Button from '../Button';
import { useBreakPoint } from '../../../hooks/useBreakPoint';
import MenuIcon from '@mui/icons-material/Menu';

interface IProps { }

const NavLink = ({ page, isActivePage }: any) => {
  return (
    <Box component='li' key={page.title} sx={{ pt: '.5rem', pb: '.75rem', borderBottom: isActivePage ? '1px solid var(--red)' : 'none' }}>
      <Link href={page.route} passHref>
        <a>                    
          <Typography fontSize={20} fontWeight={isActivePage ? 600 : 400} sx={{ color: 'primary.main' }}>{page.title}</Typography>
        </a>
      </Link>
    </Box>
  )
}

const ContactLink = ({ page }: any) => {
  return (
    <Link href={page.route} passHref key={page.title}>
      <a style={{ height: 'fit-content' }}>
        <Box component='li' sx={{ height: 'fit-content' }}>
        <Button>             
          <Typography fontSize={20} fontWeight={500} sx={{ color: 'white' }}>{page.title.toUpperCase()}</Typography>
        </Button>   

        </Box>
      </a>
    </Link>
  )
}

export const NavLinks = (props: IProps) => {
  const { asPath } = useRouter();
  const { mdSize } = useBreakPoint();

  const linksMemo = useMemo(() => {
    return (
      pages.map(page => {
        if (page.route !== '/contato') {
          const isActivePage: boolean = asPath === page.route;          
          return <NavLink page={page} isActivePage={isActivePage} />;
        } else {
          return <ContactLink page={page}/>;
        }
      })
    )
  }, [asPath])

  return (
    <>      
      {mdSize && 
        <Box component='nav'>
          <Stack direction='row' component='ul' spacing={4} sx={{ listStyle: 'none' }}>
            {linksMemo}
          </Stack>
        </Box>}
      {!mdSize &&
        <IconButton sx={{ fontSize: 40, color: 'primary.main' }}>
          <MenuIcon fontSize='inherit' />
        </IconButton>}
    </>
  )
}