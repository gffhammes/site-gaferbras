import { Box, Container } from '@mui/material'
import React from 'react'

interface IProps { }

export const MainSection = (props: IProps) => {
  return (
    <Box bgcolor='#F2F2FC'>
      <Container sx={{ py: 10 }}>        
        <div>Component</div>
      </Container>
    </Box>
  )
}