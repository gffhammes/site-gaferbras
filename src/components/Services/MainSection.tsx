import { Box, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Aside } from './Aside'
import { Content } from './Content'

interface IProps { }


const options = [
  {
    group: 'Ferramentaria',
    title: 'Ferramentais',
    text: 'Lorem ipsum',
  },
  {
    group: 'Ferramentaria',
    title: 'Manutenção & Alterações',
    text: 'Lorem ipsum',
  },
  {
    group: 'Ferramentaria',
    title: 'Peças de reposição & Usinagem',
    text: 'Lorem ipsum',
  },
  {
    group: 'Injeção',
    title: 'Injeção & Tryout de moldes',
    text: 'Lorem ipsum',
  },
  {
    group: 'Injeção',
    title: 'Produtos injetados Gaferbras',
    text: 'Lorem ipsum',
  },
]

export const MainSection = (props: IProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleOptionChange = (newOption: any) => {
    setSelectedOption(newOption);
  }

  return (
    <Box>
      <Stack direction='row'>        
        <Aside options={options} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
        <Content selectedOption={selectedOption} />
      </Stack>
    </Box>
  )
}