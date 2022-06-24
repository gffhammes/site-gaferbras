import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { OptionsAccordion } from './OptionsAccordion';

interface IProps {
  options: any[];
  selectedOption: any;
  handleOptionChange: (newOption: any) => void;
}

export const Aside = ({ options, selectedOption, handleOptionChange }: IProps) => {

  return (
    <Box bgcolor='#F2F2FC' component='aside' sx={{ width: '30rem', height: '80rem' }}>
      <Box sx={{ p: 10 }}>        
        <Typography fontSize={36} fontWeight={600} sx={{ color: 'primary.main' }}>Nossos serviços</Typography>
        <Box>
          <OptionsAccordion group={options[0].group} options={options.slice(0, 3)} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
          <OptionsAccordion group={options[3].group} options={options.slice(3, options.length)} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
        </Box>
      </Box>
    </Box>
  )
}