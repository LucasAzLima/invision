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
import Content from 'components/content';

import googleLogo from 'assets/img/google-logo.svg';

interface FormErrors {
  [key: string]: any;
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const history = useHistory();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const schemaSignIn = Yup.object().shape({
        email: Yup.string()
          .email('*Enter a valid email address or user')
          .required('*This field cannot be empty'),
        password: Yup.string().required('*This field cannot be empty'),
      });
      const data = {
        email: email,
        password: password,
      };

      await schemaSignIn.validate(data, { abortEarly: false });
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
        <Title style={{ marginBottom: '12%' }}>Welcome to Invision</Title>
        <Form onSubmit={handleSubmit} noValidate data-testid="form-signin">
          <Input
            type="email"
            label="Users name or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email ? true : false}
            helperText={errors.email || ''}
            inputProps={{
              'data-testid': 'form-email-signin',
            }}
          ></Input>
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password ? true : false}
            helperText={errors.password || ''}
            inputProps={{
              'data-testid': 'form-pass-signin',
            }}
          ></Input>
          <Text style={{ textAlign: 'right' }}>Forgot password?</Text>
          <Button type="submit" data-testid="form-button-signin">
            Sign in
          </Button>
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
        <Text style={{ textAlign: 'center' }}>
          New Invision?
          <span onClick={() => history.push('/signout')}> Create Account</span>
        </Text>
      </Box>
    </Content>
  );
};

export default SignIn;
