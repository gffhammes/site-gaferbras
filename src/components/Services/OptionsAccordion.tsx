import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _isEqual from 'lodash/isEqual'

interface IProps {
  options: any[];
  selectedOption: any;
  group: string;
  handleOptionChange: (newOption: any) => void;}

export const OptionsAccordion = ({ options, selectedOption, group, handleOptionChange}: IProps) => {
  
  const color = group === 'Ferramentaria' ? 'primary.main' : 'secondary.main';
  const boxShadow = group === 'Ferramentaria' ? '0px 0px 50px rgba(45, 56, 252, .45)' : '0px 0px 50px rgba(254, 57, 68, .3)'

  return (
    <Accordion defaultExpanded disableGutters sx={{ boxShadow: 0, '&.Mui-expanded:first-of-type': { mt: '40px' }  }} >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ backgroundColor: color, color: 'white', boxShadow }} >
        <Typography fontSize={22} fontWeight={600} >{group}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#EEEEFD', py: 3, px: 3 }}>
        <Stack spacing={2}>              
          {options.map((option, index) => {
            const isActiveOption = _isEqual(selectedOption, option)
              return (
                <Stack key={index} direction='row' alignItems='center' justifyContent='space-between' sx={{ cursor: 'pointer', '&:hover > p': { transform: 'translateX(5px)' } }} onClick={() => {handleOptionChange(option)}}>
                  <Typography
                    sx={{ color, transition: '200ms ease all' }}
                    fontWeight={isActiveOption ? 600 : 400}
                    lineHeight={1}
                    dangerouslySetInnerHTML={{ __html: option.title }}
                  />
                  {isActiveOption && <Box bgcolor={color} sx={{ height: '.5rem', width: '.5rem', borderRadius: '1rem' }} />}
                </Stack>
              )
            })
          }
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}