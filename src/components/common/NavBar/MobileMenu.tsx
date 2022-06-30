import { Box, Container } from '@mui/material'
import React from 'react'

interface IProps {
  links: any;
  isOpen: boolean;
}

export const MobileMenu = ({ links, isOpen }: IProps) => {
  return (
    <Box
      bgcolor='#F2F2F2'
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        p: 10,
        transition: '300ms ease all',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      }}
    >
      {links}
    </Box>
  )
}