import { Box, Container, Grid } from '@mui/material'
import React from 'react'

interface IProps { }

export const StructureGrid = (props: IProps) => {
  return (
    <Grid container spacing={2} sx={{ mt: 5 }} >
      <Grid item xs={12} md={7.5} >
        <Box bgcolor='primary.main' sx={{ width: '100%', height: '100%' }}>

        </Box>
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <Grid item xs={12}>          
          <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }}>

          </Box>
        </Grid>
        <Grid item xs={12}>          
          <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }}>

          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2.25} container spacing={2}>
        <Grid item xs={12}>          
          <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }}>

          </Box>
        </Grid>
        <Grid item xs={12}>          
          <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }}>

          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>   
        <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }}>

        </Box>
      </Grid>
      <Grid item xs={12} md={3}>   
        <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }}>

        </Box>
      </Grid>
      <Grid item xs={12} md={6}>   
        <Box bgcolor='primary.main' sx={{ width: '100%', height: '100%' }}>

        </Box>
      </Grid>
    </Grid>
  )
}