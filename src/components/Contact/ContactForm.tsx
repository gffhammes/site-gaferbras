import { Box, Container, Grid, Stack } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import Button from '../common/Button'

interface IProps { }

interface IInputProps {
  value: string;
  label: string;
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, label, id, handleChange }: IInputProps) => {
  return (
    <Stack>      
      <label style={{ color: 'var(--primary)', marginBottom: '.5rem' }}>{label}</label>
      <input
        type='text'
        id={id}
        value={value}
        onChange={handleChange}
        style={{
          height: '2rem',
          padding: '2rem 1rem',
          backgroundColor: 'rgba(182, 182, 229, 0.1)',
          border: 0
        }}
      />
    </Stack>
  )
}

export const ContactForm = (props: IProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(formData => ({
      ...formData,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(formData)
  }


  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            value={formData.name}
            label='Nome'
            id='name'
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            value={formData.email}
            label='Email'
            id='email'
            handleChange={handleChange}
          />          
        </Grid>
        <Grid item xs={6}>
          <Input
            value={formData.company}
            label='Empresa'
            id='company'
            handleChange={handleChange}
          />          
        </Grid>
        <Grid item xs={6}>
          <Input
            value={formData.phone}
            label='Fone'
            id='phone'
            handleChange={handleChange}
          />          
        </Grid>
        <Grid item xs={12}>
          <Input
            value={formData.message}
            label='Mensagem'
            id='message'
            handleChange={handleChange}
          />          
        </Grid>
        <Grid item xs={12}>
          <Button type='submit'>Enviar</Button>
        </Grid>
      </Grid>
    </Box>
  )
}