import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { DefaultGridItem } from './DefaultGridItem'

interface IProps { }

export const StructureGrid = (props: IProps) => {
  return (
    <Grid container spacing={2} sx={{ mt: 5 }} >
      <DefaultGridItem xs={12} md={7.5} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' height />

      <Grid item xs={12} md={2.25} container spacing={2}>        
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' />
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' />
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' />
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' />
      </Grid>
      <Grid item xs={12} md={3}> 
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' />
      </Grid>
      <Grid item xs={12} md={3}>
        <DefaultGridItem xs={12} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' />
      </Grid>
      <DefaultGridItem xs={12} md={6} image='/images/gaferbras-1.jpg' text='Eletro Erosão Engemaq EDM' height />
    </Grid>
  )
}