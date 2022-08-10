import { Box, Container, Grid, Stack } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { sendMail } from '../../helpers/sendMail';
import Button from '../common/Button'
import { useSnackbar  } from 'notistack'

interface IInputProps {
  value: string;
  label: string;
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, label, id, handleChange }: IInputProps) => {
  return (
    <Stack>      
      <label style={{ color: 'var(--primary)', marginBottom: '.5rem' }}>{label}</label>
      <Box
        component='input'
        type='text'
        id={id}
        value={value}
        onChange={handleChange}
        sx={{
          height: '2rem',
          padding: '2rem 1rem',
          color: 'var(--primary)',
          backgroundColor: 'rgba(182, 182, 229, 0.1)',
          border: 0,
          transition: '.2s all ease',
          fontSize: 20,
          '&:focus-visible': {
            backgroundColor: 'rgba(182, 182, 229, 0.2)',
            outline: 'none',
          },
        }}
      />
    </Stack>
  )
}
