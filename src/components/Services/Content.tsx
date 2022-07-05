import { Box, Container, Typography } from '@mui/material'
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { SlideFromLeftAppearMotion } from '../common/motion/DefaultAppearMotion';
import { ScrollAppearMotion } from '../common/motion/ScrollAppearMotion';

interface IProps {
  selectedOption: any;
}

export const Content = ({ selectedOption }: IProps) => {
  let oneLineTitle = selectedOption.title;

  oneLineTitle = oneLineTitle.replace('<br/>', ' ');
  oneLineTitle = oneLineTitle.replace('<br />', ' ');

  
  return (
    <Box bgcolor='rgba(242, 242, 252, .2)' sx={{ maxWidth: '872px' }}>
      <AnimatePresence>
        <SlideFromLeftAppearMotion key={selectedOption.title} delay={0.4}>
          <Box
            sx={{
              p: {
                xs: '2rem 1rem',
                md: '5rem 1.5rem 5rem 2.5rem',
              },
            }}
          >        
            <Typography fontSize={18} sx={{ color: 'rgba(80, 89, 101, 0.5)' }}>{selectedOption.group}</Typography>
            <Typography
              fontSize={35}
              fontWeight={600}
              sx={{
                color: selectedOption.group === 'Ferramentaria' ? '#2D38FC' : 'secondary.main',
                mb: 2
              }}
              dangerouslySetInnerHTML={{ __html: oneLineTitle  }}
            />
            <Typography
              fontSize={16}
              dangerouslySetInnerHTML={{ __html: selectedOption.text }}   
              sx={{ mb: 2 }}
            />
            <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1.75 / 1' }}>
              <Image
                src={selectedOption.image}
                alt={selectedOption.title}
                layout='fill'
                objectFit='cover'
              />
            </Box>
          </Box>
        </SlideFromLeftAppearMotion>
      </AnimatePresence>
    </Box>
  )
}