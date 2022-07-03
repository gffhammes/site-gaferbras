import { Box, Typography } from '@mui/material'
import React from 'react'

interface IProps {
  title: string;
  text: string;
}

export const TitleAndText = ({ title, text }: IProps) => {
  return (
    <Box sx={{ color: 'primary.main', mb: 5 }}>          
      <Typography
        textAlign='center'
        fontSize={40}
        sx={{ width: 'fit-content', mx: 'auto', borderBottom: '2px solid var(--red)', mb: 2 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Typography
        textAlign='center'
        fontSize={22}
        sx={{ maxWidth: '34ch', mx:'auto' }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Box>
  )
}