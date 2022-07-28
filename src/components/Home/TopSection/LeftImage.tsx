import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps {
  imageSrc: string;
}

export const LeftImage = ({ imageSrc }: IProps) => {
  return (
    <Box sx={{ position: 'absolute', top: 0, right: 0, height: 'calc(100% + 5rem)', width: '48vw', }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>        
        <Image  
          src={imageSrc}
          alt='Gaferbras'
          layout='fill'
          objectFit='cover'
        />
      </Box>
    </Box>
  )
}