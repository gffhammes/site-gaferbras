import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useMemo, useState } from 'react'
import { pages } from '../../../constants/pages'
import { useRouter } from 'next/router'
import Button from '../Button';
import { useBreakPoint } from '../../../hooks/useBreakPoint';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MobileMenu } from './MobileMenu';

interface IProps { }

const NavLink = ({ page, isActivePage, toggleMenu }: any) => {
  return (
    <Box component='li' key={page.title} sx={{ pt: '.5rem', pb: '.75rem', borderBottom: isActivePage ? '1px solid var(--red)' : 'none' }}>
      <Link href={page.route} passHref>
        <a>                    
          <Typography onClick={toggleMenu} fontSize={20} fontWeight={isActivePage ? 600 : 400} sx={{ color: 'primary.main' }}>{page.title}</Typography>
        </a>
      </Link>
    </Box>
  )
}

const ContactLink = ({ page, toggleMenu }: any) => {
  return (
    <Link href={page.route} passHref key={page.title}>
      <a style={{ height: 'fit-content' }}>
        <Box component='li' sx={{ height: 'fit-content' }}>
          <Button onClick={toggleMenu}>
            <Typography fontSize={20} fontWeight={500} sx={{ color: 'white' }}>{page.title.toUpperCase()}</Typography>
          </Button>
        </Box>
      </a>
    </Link>
  )
}

export const NavLinks = (props: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { asPath } = useRouter();
  const { mdSize } = useBreakPoint();

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  }

  const linksMemo = useMemo(() => {
    return (      
      <Stack direction={{ xs: 'column', md: 'row' }} component='ul' spacing={4} sx={{ listStyle: 'none' }}>
        {pages.map(page => {
          if (page.route !== '/contato') {
            const isActivePage: boolean = asPath === page.route;          
            return <NavLink page={page} isActivePage={isActivePage} toggleMenu={toggleMenu}/>;
          } else {
            return <ContactLink page={page} toggleMenu={toggleMenu}/>;
          }
        })}
      </Stack>
    )
  }, [asPath])

  return (
    <>      
      {mdSize && 
        <Box component='nav'>
          {linksMemo}
        </Box>
      }
      {!mdSize &&
        <>        
          <IconButton onClick={toggleMenu} sx={{ fontSize: 30, color: 'primary.main', zIndex: 1000, position: 'relative' }}>
            { isMenuOpen ? <CloseIcon fontSize='inherit' /> : <MenuIcon fontSize='inherit' />}
          </IconButton>
          <MobileMenu links={linksMemo} isOpen={isMenuOpen} />
        </>
      }
    </>
  )
}