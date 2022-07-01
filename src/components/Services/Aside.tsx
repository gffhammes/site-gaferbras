import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { OptionsAccordion } from './OptionsAccordion';
import { useBreakPoint } from '../../hooks/useBreakPoint';

interface IProps {
  options: any[];
  selectedOption: any;
  handleOptionChange: (newOption: any) => void;
}

export const Aside = ({ options, selectedOption, handleOptionChange }: IProps) => {
  const { mdSize } = useBreakPoint();

  return (
    <Box bgcolor='var(--light-grey)' component={mdSize ? 'aside' : 'div'} sx={{ flexBasis: 'calc(50% - 17rem)' }}>
      <Stack
        spacing={5}
        justifyContent='flex-start'
        sx={{
          maxWidth: { md: '328px' },
          p: {
            xs: '2rem 1rem',
            md: '5rem 3rem 5rem 1.5rem',
          },
          ml: 'auto'
        }}
      >
        <Typography fontSize={36} fontWeight={600} lineHeight={1} sx={{ color: 'primary.main', maxWidth: { xs: 'unset', md: '10ch' }}}>Nossos Serviços</Typography>
        <OptionsAccordion group={options[0].group} options={options.slice(0, 3)} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
        <OptionsAccordion group={options[3].group} options={options.slice(3, options.length)} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
      </Stack>
    </Box>
  )
}