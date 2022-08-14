import { Box, Stack, Typography } from '@mui/material'
import { useField } from 'formik';
import React, { ChangeEvent } from 'react'

interface IInputProps {
  label: string;
  name: string;
}

const sxInput = {
  height: '2rem',
  padding: '2rem 1rem',
  color: 'var(--primary)',
  backgroundColor: 'rgba(182, 182, 229, 0.1)',
  border: 'none',
  transition: '.2s all ease',
  fontSize: 20,
  outline: 'none',
  '&:focus-visible': {
    backgroundColor: 'rgba(182, 182, 229, 0.3)',
  },
}

const sxInputError = {
  ...sxInput,
  border: '1px solid var(--red)'
}

export const Input = ({ label, name }: IInputProps) => {
  const [field, meta, helpers] = useField({ name });

  return (
    <Stack>      
      <label style={{ color: 'var(--primary)', marginBottom: '.5rem' }}>{label}</label>
      <Box
        {...field}
        component='input'
        type='text'
        sx={meta.error && meta.touched ? sxInputError : sxInput}
      />
      {meta.error && meta.touched && <Typography fontSize={12} sx={{ color: 'var(--red)', mt: .5 }}>{meta.error}</Typography>}
    </Stack>
  )
}
