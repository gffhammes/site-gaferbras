import { Box, Container, Grid, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ScrollAppearOpacityMotion } from '../common/motion/ScrollAppearMotion';

interface IDefaultGridItemProps {
  image: string;
  text: string;
  delay: number;
  height?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const sxBox: SxProps<Theme> = {
  width: '100%',
  overflow: 'hidden',
  '& > *': {
    transition: '500ms ease all'
  },
  '&:hover > *': {
    transform: 'translateY(-50%)'
  },
}

const sxStack: SxProps<Theme> = {
  width: '100%',
  height: '200%'
}

const sxImage: SxProps<Theme> = {
  position: 'relative', width: '100%', height: '100%'
}

const sxTextBlock: SxProps<Theme> = {
  width: '100%', height: '100%', color: 'white', display: 'flex', backgroundColor: 'primary.main'
}

export const DefaultGridItem = ({ image, text, height=false, delay, xs, sm, md, lg, xl }: IDefaultGridItemProps) => {

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} >
      <ScrollAppearOpacityMotion delay={delay}>
        <Box sx={{ ...sxBox, height: height ? '100%' : 'unset', aspectRatio: height ? 'unset' : '1 / 1' }}>
          <Stack sx={sxStack}>
            <Box sx={sxImage}>
              <Image
                src={image}
                alt={text}
                layout='fill'
                objectFit='cover'
                priority={true}
              />
            </Box>
            <Box sx={sxTextBlock}>
              <Typography textAlign='center' fontSize={20} sx={{ m: 'auto', maxWidth: '15ch' }}>{text}</Typography>
            </Box>
          </Stack>
        </Box>
      </ScrollAppearOpacityMotion>
    </Grid>
  )
}