import { Box, Container, Grid, Stack } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { sendMail } from '../../helpers/sendMail';
import Button from '../common/Button'
import { useSnackbar  } from 'notistack'
import { Input } from './Input';
import { Form, Formik } from 'formik';

interface IProps {
  recipientMail: string;
}

const formInitialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
}

export const ContactForm = ({ recipientMail }: IProps) => {
  const [sending, setSending] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values: any, { resetForm }: any) => {
    setSending(true);

    sendMail({      
      email: values.email,
      recipientMail,
      subject: 'Contato site',
      message: 'teste',
    })
    .then(() => {
      enqueueSnackbar("Mensagem enviada com sucesso!", { variant: 'success' });
      resetForm();
    })
    .finally(() => setSending(false));
  }

  return (
    <Formik
      initialValues={formInitialState}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => (        
        <Form >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                value={values.name}
                label='Nome'
                id='name'
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                value={values.email}
                label='Email'
                id='email'
                handleChange={handleChange}
              />          
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                value={values.company}
                label='Empresa'
                id='company'
                handleChange={handleChange}
              />          
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                value={values.phone}
                label='Fone'
                id='phone'
                handleChange={handleChange}
              />          
            </Grid>
            <Grid item xs={12}>
              <Input
                value={values.message}
                label='Mensagem'
                id='message'
                handleChange={handleChange}
              />          
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <Button loading={sending} type='submit' sx={{ mx: 'auto' }}>Enviar</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}