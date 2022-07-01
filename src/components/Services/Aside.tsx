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
    <Box bgcolor='var(--light-grey)' component='aside' sx={{ flexBasis: 'calc(50% - 17rem)', /**minWidth: '22rem' */ }}>
      <Stack spacing={5} justifyContent='flex-start' sx={{ maxWidth: '328px', py: 10, px: 3, pr: 6, ml: 'auto' }}>
        <Typography fontSize={36} fontWeight={600} lineHeight={1} sx={{ color: 'primary.main' }}>Nossos<br/>Serviços</Typography>
        <OptionsAccordion group={options[0].group} options={options.slice(0, 3)} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
        <OptionsAccordion group={options[3].group} options={options.slice(3, options.length)} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
      </Stack>
    </Box>
  )
}