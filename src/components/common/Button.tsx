import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

const ColorButton = styled(MuiButton)<ButtonProps>((props) => ({
  color: 'white',
  // backgroundColor: props.color ? props.color : 'primary.main',
  borderRadius: '0',
  '&:hover': {
    // backgroundColor: 'primary.dark',
  },
}));

export default function Button({ children, startIcon, color, ...props }: ButtonProps) {
  return (
    <ColorButton {...props} variant="contained" color={color} startIcon={startIcon}>{children}</ColorButton>
  );
}