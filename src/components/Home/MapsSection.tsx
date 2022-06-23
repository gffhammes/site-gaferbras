import { Box, Container } from '@mui/material'
import React from 'react'

interface IProps { }

export const MapsSection = (props: IProps) => {
  return (
    <Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2752014306707!2d-48.90473907012872!3d-26.285177120552177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea5475354ad87%3A0xb4f8d06489b44dd4!2sGaferbras%20Industrial%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1655999981123!5m2!1spt-BR!2sbr" width="100%"
        height="450"
        style={{ border: 0}}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  )
}