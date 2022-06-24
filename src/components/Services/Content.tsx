import { Box, Container, Typography } from '@mui/material'
import React from 'react'

interface IProps {
  selectedOption: any;
}

export const Content = ({ selectedOption }: IProps) => {
  return (
    <Box bgcolor='rgba(242, 242, 252, .2)' sx={{ flex: 1 }}>
      <Box sx={{ py: 10, px: 5 }}>        
        <Typography fontSize={18} sx={{ color: '#505965' }}>{selectedOption.group}</Typography>
        <Typography fontSize={35} fontWeight={600} sx={{ color: selectedOption.group === 'Ferramentaria' ? '#2D38FC' : 'secondary.main' }}>{selectedOption.title}</Typography>
      </Box>
    </Box>
  )
}