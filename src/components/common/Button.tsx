import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

const ColorButton = styled(MuiButton)<ButtonProps>(() => ({
  color: 'white',
  backgroundColor: 'primary.main',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
}));

export default function Button({ children, startIcon, ...props }: ButtonProps) {
  return (
    <ColorButton {...props} variant="contained" startIcon={startIcon}>{children}</ColorButton>
  );
}