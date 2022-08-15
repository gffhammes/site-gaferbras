import { Grid } from '@mui/material'
import React, { useContext, useState } from 'react'
import { sendMail } from '../../helpers/sendMail';
import Button from '../common/Button'
import { useSnackbar  } from 'notistack'
import { Input } from './Input';
import { Form, Formik } from 'formik';
import { ContactContext } from '../../contexts/Contact/ContactContext';

enum Errors {
  REQUIRED = 'Campo obrigatório',
  INVALID_MAIL = 'Email inválido',
}

const formInitialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
}

export const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const contactContext = useContext(ContactContext);

  const validate = (values: any) => {
    const errors: any = {};

    if (values.name === "") {
      errors.name = Errors.REQUIRED;
    }
    
    if (values.email === "") {
      errors.email = Errors.REQUIRED;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = Errors.INVALID_MAIL;
    }
    
    if (values.company === "") {
      errors.company = Errors.REQUIRED;
    }
    
    if (values.phone === "") {
      errors.phone = Errors.REQUIRED;
    }
    
    if (values.message === "") {
      errors.message = Errors.REQUIRED;
    }

    return errors;
  }

  const handleSubmit = (values: any, { resetForm }: any) => {
    setSending(true);

    sendMail({      
      email: values.email,
      recipientMail: contactContext.contactFormMail,
      subject: 'Contato site Gaferbras',
      message: `
        Novo contato para Gaferbras
        <br />
        <br />
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Empresa: ${values.company}</li>
          <li>Telefone: ${values.phone}</li>
          <li>Mensagem: ${values.message}</li>
        </ul>
      `,
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
      validate={validate}
      onSubmit={handleSubmit}
    >     
      <Form >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              label='Nome'
              name='name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label='Email'
              name='email'
            />          
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label='Empresa'
              name='company'
            />          
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label='Fone'
              name='phone'
            />          
          </Grid>
          <Grid item xs={12}>
            <Input
              label='Mensagem'
              name='message'
            />          
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex' }}>
            <Button loading={sending} type='submit' sx={{ mx: 'auto' }}>Enviar</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}