import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { DefaultGridItem } from './DefaultGridItem'

interface IProps { }

export const StructureGrid = (props: IProps) => {
  const delay= .4;
  return (
    <Grid container spacing={2} >
      <DefaultGridItem xs={12} md={7.5} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={1 * delay} height />

      <Grid item xs={12} md={2.25} container spacing={2}>        
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={2 * delay} />
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={3 * delay} />
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={4 * delay} />
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={5 * delay} />
      </Grid>
      <Grid item xs={12} md={3}> 
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={6 * delay} />
      </Grid>
      <Grid item xs={12} md={3}>
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={7 * delay} />
      </Grid>
      <DefaultGridItem xs={12} md={6} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' delay={8 * delay} height />
    </Grid>
  )
}