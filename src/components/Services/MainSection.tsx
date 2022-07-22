import { Box, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Aside } from './Aside'
import { Content } from './Content'

interface IProps { }


const options = [
  {
    group: 'Ferramentaria',
    title: 'Ferramentais',
    text: 'Possuímos uma estrutura moderna para o desenvolvimento e confecção de moldes de pequeno e médio porte <strong>(até 10 toneladas)</strong>.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Ferramentaria',
    title: 'Manutenção<br/>& Alterações',
    text: 'Dispomos de estrutura para manutenção e alterações de moldes de pequeno e médio porte ate 10 toneladas.<br/>Oferecemos assistência desde a alteração do projeto do produto, até a alteração do projeto final do ferramental, adequando-o a necessidade e estrutura do equipamento e parque fabril do cliente.<br/>A adequação acontece no melhor prazo com acompanhamento do cliente através de cronogramas, fotos ou visitas.<br/>A Gaferbras dispõe de injetoras para realização de Tryout, para o caso de moldes para termoplásticos, para outros tipos de ferramentais, pode ser feito diretamente no cliente ou em outros fornecedores credenciados pela Gaferbras.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Ferramentaria',
    title: 'Peças de reposição<br/>& Usinagem',
    text: 'Usinamos peças de reposição através do projeto ou modelamento fornecido pelo cliente ou desenvolvemos o desenho copiando a peça original ou avariada.<br/>Todo o processo é realizado no melhor prazo, com acompanhamento do cliente através de cronogramas, fotos e/ou visitas.',
    image: '/images/gaferbras-1.jpg',
  },
  {
    group: 'Injeção',
    title: 'Injeção & Tryout<br/>de moldes',
    text: 'Nosso parque fabril oferece injetoras com capacidade de 130, 230 e 330 toneladas de fechamento e injeção de até 1085 gramas, bem como todos os periféricos necessários para qualificar nosso serviço.<br/>Também contamos com uma equipe técnica com larga experiência para testes e injeção em maiores escalas nos mais variados polímeros e tipos de moldes.',
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