import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps { }

const boxCommonSx = {
  width: '100%',
  overflow: 'hidden',
  '& > *': {
    transition: '500ms ease all'
  },
  '&:hover > *': {
    transform: 'translateY(-50%)'
  },
}

const sxStack = {
  width: '100%',
  height: '200%'
}

const sxImage = {
  position: 'relative', width: '100%', height: '100%'
}

const sxTextBlock = {
  width: '100%', height: '100%', color: 'white', display: 'flex', backgroundColor: 'primary.main'
}

export const StructureGrid = (props: IProps) => {
  return (
    <Grid container spacing={2} sx={{ mt: 5 }} >
      <Grid item xs={12} md={7.5} >
        <Box sx={{ ...boxCommonSx, height: '100%' }}>
          <Stack sx={sxStack}>
            <Box sx={sxImage}>
              <Image
                src='/images/gaferbras-1.jpg'
                alt='Maquina'
                layout='fill'
                objectFit='cover'
              />
            </Box>
            <Box sx={sxTextBlock}>
              <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...boxCommonSx, aspectRatio: '1 / 1' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}>    
          <Box sx={{ ...boxCommonSx, aspectRatio: '1 / 1' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <Grid item xs={12}> 
          <Box sx={{ ...boxCommonSx, aspectRatio: '1 / 1' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}> 
          <Box sx={{ ...boxCommonSx, aspectRatio: '1 / 1' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>  
          <Box sx={{ ...boxCommonSx, aspectRatio: '1 / 1' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
      </Grid>
      <Grid item xs={12} md={3}>   
          <Box sx={{ ...boxCommonSx, aspectRatio: '1 / 1' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
      </Grid>
      <Grid item xs={12} md={6}>   
          <Box sx={{ ...boxCommonSx, height: '100%' }}>
            <Stack sx={sxStack}>
              <Box sx={sxImage}>
                <Image
                  src='/images/gaferbras-1.jpg'
                  alt='Maquina'
                  layout='fill'
                  objectFit='cover'
                />
              </Box>
              <Box sx={sxTextBlock}>
                <Typography textAlign='center' fontSize={20} sx={{ m: 'auto' }}>Eletro Erosão<br/>Engemaq EDM</Typography>
              </Box>
            </Stack>
          </Box>
      </Grid>
    </Grid>
  )
}