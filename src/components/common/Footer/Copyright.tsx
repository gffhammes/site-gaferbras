import { Box, Container, Typography } from '@mui/material'
import React from 'react'

interface IProps { }

export const Copyright = (props: IProps) => {
  return (
    <Box bgcolor='#2D38FC'>
      <Container sx={{ py: 1, color: 'white' }}>          
        <Typography fontSize={12} textAlign='center'>Todos os direitos estão reservados</Typography>
      </Container>
    </Box>
  )
}