import React, { useState } from 'react';
import { Box, Divider } from '@material-ui/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import {
  Logo,
  Title,
  Input,
  Form,
  Text,
  Button,
  GoogleButton,
} from '../styles';

import googleLogo from 'assets/img/google-logo.svg';

import Content from 'components/content';

interface FormErrors {
  [key: string]: any;
}
const SIgnOut: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const schemaSignOut = Yup.object().shape({
        text: Yup.string().required('*This field cannot be empty'),
        email: Yup.string()
          .email('*Enter a valid email address')
          .required('*This field cannot be empty'),
        password: Yup.string()
          .min(6)
          .required('*The password cannot be less than 6 characters'),
      });
      const data = {
        text: name,
        email: email,
        password: password,
      };

      await schemaSignOut.validate(data, { abortEarly: false });
      setErrors({});
    } catch (err) {
      const validationErrors: FormErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
      }
      setErrors(validationErrors);
    }
  };

  return (
    <Content>
      <Logo style={{ marginBottom: '10%' }}>Invision</Logo>
      <Box maxWidth="433px" margin="auto">
        <Title style={{ marginBottom: '12%' }}>Getting Started</Title>
        <Form onSubmit={handleSubmit} noValidate>
          <Input
            type="text"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.text ? true : false}
            helperText={errors.text || ''}
          ></Input>
          <Input
            type="email"
            label="Users name or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email ? true : false}
            helperText={errors.email || ''}
          ></Input>
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password ? true : false}
            helperText={errors.password || ''}
          ></Input>
          <Text style={{ textAlign: 'right' }}>Forgot password?</Text>
          <Button type="submit">Sign up</Button>
        </Form>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Divider style={{ width: '40%' }} />
          <Text>Or</Text>
          <Divider style={{ width: '40%' }} />
        </Box>
        <GoogleButton>
          <img src={googleLogo} alt="" />
          <Text>Sign in with Google</Text>
        </GoogleButton>
        <Text style={{ textAlign: 'center', marginBottom: '3%' }}>
          By signing up, you agree to <strong>Invision</strong>
          <span>Terms of Conditions</span> and <span>Privacy Policy</span>
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Already on <strong>Invision</strong>?
          <span onClick={() => history.push('/')}> Log in</span>
        </Text>
      </Box>
    </Content>
  );
};

export default SIgnOut;
