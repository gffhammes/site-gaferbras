import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Aside } from './Aside'
import { Content } from './Content'

interface IProps {
  services: any[]
}

export const MainSection = ({ services }: IProps) => {
  const [selectedOption, setSelectedOption] = useState(services[0])

  const handleOptionChange = (newOption: any) => {
    setSelectedOption(newOption);
  }

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ minHeight: '75vh' }}>        
        <Aside options={services} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
        <Content selectedOption={selectedOption} />
      </Stack>
    </Box>
  )
}