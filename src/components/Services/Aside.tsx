import { Box, Stack, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { OptionsAccordion } from './OptionsAccordion';
import { useBreakPoint } from '../../hooks/useBreakPoint';
import { ScrollAppearOpacityMotion } from '../common/motion/ScrollAppearMotion';

interface IProps {
  options: any[];
  selectedOption: any;
  handleOptionChange: (newOption: any) => void;
}

export const Aside = ({ options, selectedOption, handleOptionChange }: IProps) => {
  const { mdSize } = useBreakPoint();

  const groups = useMemo(() => {
    const ferramentaria: any[] = [];
    const injecao: any[] = [];

    options.forEach((option) => {
      if (option.attributes.categoria === "Ferramentaria") {
        ferramentaria.push(option)
      } else if (option.attributes.categoria === "Injeção") {
        injecao.push(option)
      }
    })

    return { ferramentaria, injecao }
  }, [options])

  return (
    <Box bgcolor='var(--light-grey)' component={mdSize ? 'aside' : 'div'} sx={{ flexBasis: 'calc(50% - 17rem)' }}>
      <ScrollAppearOpacityMotion delay={0}>
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
          <OptionsAccordion group="Ferramentaria" options={groups.ferramentaria} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
          <OptionsAccordion group="Injeção" options={groups.injecao} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
        </Stack>
      </ScrollAppearOpacityMotion>
    </Box>
  )
}