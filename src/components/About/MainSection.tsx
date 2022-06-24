import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { ImageStack } from './ImageStack'

interface IProps { }

const text = `A Gaferbras é uma empresa consolidada na área de ferramentaria, que iniciou as suas operações em 1995 e hoje soma mais de 25 anos de experiência, com mais de 300 clientes atendidos em todo o país.

Desde o início, nosso objetivo é proporcionar a melhor solução em ferramentais, unindo eficiência, tecnologia e qualidade. O compromisso com os nossos valores, dia após dia, proporcionaram o crescimento da empresa e a sua solidificação no mercado.

Hoje trabalhamos com o desenvolvimento de produtos, projetos, confecção de ferramentais, assistência técnica, e também, injeção de peças plásticas. Além disso, oferecemos garantia em cima de todos os produtos fabricados.

Nossa área de engenharia conta com softwares de última geração, para proporcionar uma melhor experiência em todo o processo de criação de produtos, alterações e melhorias.

Já na área de manufatura, contamos com equipamentos de ponta, que são responsáveis por toda confecção de ferramentais, injeção de peças plásticas e confecção de peças de reposição para o setor industrial.

A Gaferbras está sempre investindo em aprimoramentos e novas tecnologias, assim como na capacitação de seus fornecedores e funcionários, para se manter atualizada, garantir a qualidade de seus serviços e alcançar a satisfação de seus clientes. 

Ao longo de nossa história, construímos uma carteira de clientes com empresas dos mais diversos ramos de atuação, como indústrias de eletrodomésticos, brinquedos, utilidades domésticas e montadoras automotivas.`

export const MainSection = (props: IProps) => {
  return (
    <Box bgcolor='#F2F2FC'>
      <Container sx={{ py: 10, color: 'primary.main' }}>
        <Stack direction='row' spacing={10}>          
          <Box sx={{ maxWidth: '55ch' }}>          
            <Typography fontSize={36} fontWeight={600} sx={{ mb: 2  }}>Sobre nós</Typography>
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>{text}</Typography>
          </Box>
          <ImageStack />
        </Stack>
      </Container>
    </Box>
  )
}