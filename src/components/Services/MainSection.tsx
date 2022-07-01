import { Box, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Aside } from './Aside'
import { Content } from './Content'

interface IProps { }


const options = [
  {
    group: 'Ferramentaria',
    title: 'Ferramentais',
    text: 'Possuímos uma estrutura moderna para o desenvolvimento e confecção de moldes de pequeno e médio porte <strong>(até 10 toneladas)</strong>. Oferecemos assistência desde o estudo e desenvolvimento do projeto do produto até a simulação de injeção e o projeto final do ferramental, adequando-o às necessidades do cliente.<br/>Todo o processo é realizado com acompanhamento do cliente através dos cronogramas, fotos e/ou visitas.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Ferramentaria',
    title: 'Manutenção<br/>& Alterações',
    text: 'Possuímos uma estrutura moderna para o desenvolvimento e confecção de moldes de pequeno e médio porte <strong>(até 10 toneladas)</strong>. Oferecemos assistência desde o estudo e desenvolvimento do projeto do produto até a simulação de injeção e o projeto final do ferramental, adequando-o às necessidades do cliente.<br/>Todo o processo é realizado com acompanhamento do cliente através dos cronogramas, fotos e/ou visitas.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Ferramentaria',
    title: 'Peças de reposição<br/>& Usinagem',
    text: 'Possuímos uma estrutura moderna para o desenvolvimento e confecção de moldes de pequeno e médio porte <strong>(até 10 toneladas)</strong>. Oferecemos assistência desde o estudo e desenvolvimento do projeto do produto até a simulação de injeção e o projeto final do ferramental, adequando-o às necessidades do cliente.<br/>Todo o processo é realizado com acompanhamento do cliente através dos cronogramas, fotos e/ou visitas.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Injeção',
    title: 'Injeção & Tryout<br/>de moldes',
    text: 'Possuímos uma estrutura moderna para o desenvolvimento e confecção de moldes de pequeno e médio porte <strong>(até 10 toneladas)</strong>. Oferecemos assistência desde o estudo e desenvolvimento do projeto do produto até a simulação de injeção e o projeto final do ferramental, adequando-o às necessidades do cliente.<br/>Todo o processo é realizado com acompanhamento do cliente através dos cronogramas, fotos e/ou visitas.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Injeção',
    title: 'Produtos injetados<br/>Gaferbras',
    text: 'Possuímos uma estrutura moderna para o desenvolvimento e confecção de moldes de pequeno e médio porte <strong>(até 10 toneladas)</strong>. Oferecemos assistência desde o estudo e desenvolvimento do projeto do produto até a simulação de injeção e o projeto final do ferramental, adequando-o às necessidades do cliente.<br/>Todo o processo é realizado com acompanhamento do cliente através dos cronogramas, fotos e/ou visitas.',
    image: '/images/gaferbras-1.jpg',
  },
]

export const MainSection = (props: IProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleOptionChange = (newOption: any) => {
    setSelectedOption(newOption);
  }

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ minHeight: '75vh' }}>        
        <Aside options={options} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
        <Content selectedOption={selectedOption} />
      </Stack>
    </Box>
  )
}