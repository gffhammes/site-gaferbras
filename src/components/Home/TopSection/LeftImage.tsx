import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps { }

export const LeftImage = (props: IProps) => {
  return (
    <Box sx={{ position: 'absolute', top: 0, right: 0, height: 'calc(100% + 5rem)', width: '48vw', }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>        
        <Image  
          src='/images/gaferbras-1.jpg'
          alt='Gaferbras'
          layout='fill'
          objectFit='cover'
        />
      </Box>
    </Box>
  )
}