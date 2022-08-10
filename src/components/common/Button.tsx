import React from 'react';
import { styled } from '@mui/material/styles';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';

const ColorButton = styled(LoadingButton)<LoadingButtonProps>((props) => ({
  color: 'white',
  // backgroundColor: props.color ? props.color : 'primary.main',
  borderRadius: '0',
  '&:hover': {
    // backgroundColor: 'primary.dark',
  },
}));

export default function Button({ children, startIcon, color, ...props }: LoadingButtonProps) {
  return (
    <ColorButton {...props} variant="contained" color={color} startIcon={startIcon}>{children}</ColorButton>
  );
}