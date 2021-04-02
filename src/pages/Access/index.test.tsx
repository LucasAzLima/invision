import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';

import SignIn from 'pages/Access/Signin';
import SignOut from 'pages/Access/Signout';

describe('Quando o login for submetido', () => {
  const { getByTestId, getByText } = render(<SignIn />);

  it('Campo de senha vazio', async () => {
    const fieldNodeEmailIn = await waitForElement(() =>
      getByTestId('form-email-signin')
    );
    fireEvent.change(fieldNodeEmailIn, {
      target: { value: 'email@email.com' },
    });

    const fieldNodePassIn = await waitForElement(() =>
      getByTestId('form-pass-signin')
    );
    fireEvent.change(fieldNodePassIn, { target: { value: '' } });

    const fieldNodeButtonIn1 = await waitForElement(() =>
      getByTestId('form-button-signin')
    );
    fireEvent.click(fieldNodeButtonIn1);
    const fieldNodeForm = await waitForElement(() =>
      getByText('*This field cannot be empty')
    );
    expect(fieldNodeForm).toBeDefined();
  });

  it('Campo de email vazio', async () => {
    const fieldNodeEmailIn = await waitForElement(() =>
      getByTestId('form-email-signin')
    );
    fireEvent.change(fieldNodeEmailIn, { target: { value: '' } });

    const fieldNodePassIn = await waitForElement(() =>
      getByTestId('form-pass-signin')
    );
    fireEvent.change(fieldNodePassIn, { target: { value: 'password' } });

    const fieldNodeButtonIn = await waitForElement(() =>
      getByTestId('form-button-signin')
    );
    fireEvent.click(fieldNodeButtonIn);
    const fieldNodeForm = await waitForElement(() =>
      getByText('*This field cannot be empty')
    );
    expect(fieldNodeForm).toBeDefined();
  });
});

describe('Quando o cadastro for submetido', () => {
  const { getByTestId, getByText } = render(<SignOut />);

  it('Campo de nome vazio', async () => {
    const fieldNodeNameOut = await waitForElement(() =>
      getByTestId('form-name-signout')
    );
    fireEvent.change(fieldNodeNameOut, { target: { value: '' } });

    const fieldNodeEmailOut = await waitForElement(() =>
      getByTestId('form-email-signout')
    );
    fireEvent.change(fieldNodeEmailOut, {
      target: { value: 'email@email.com' },
    });

    const fieldNodePassIn = await waitForElement(() =>
      getByTestId('form-pass-signout')
    );
    fireEvent.change(fieldNodePassIn, { target: { value: 'password' } });

    const fieldNodeButtonIn = await waitForElement(() =>
      getByTestId('form-button-signout')
    );
    fireEvent.click(fieldNodeButtonIn);
    const fieldNodeForm = await waitForElement(() =>
      getByText('*This field cannot be empty')
    );
    expect(fieldNodeForm).toBeDefined();
  });

  it('Campo de senha vazio', async () => {
    const fieldNodeNameOut = await waitForElement(() =>
      getByTestId('form-name-signout')
    );
    fireEvent.change(fieldNodeNameOut, { target: { value: 'name' } });

    const fieldNodeEmailOut = await waitForElement(() =>
      getByTestId('form-email-signout')
    );
    fireEvent.change(fieldNodeEmailOut, {
      target: { value: 'email@email.com' },
    });

    const fieldNodePassOut = await waitForElement(() =>
      getByTestId('form-pass-signout')
    );
    fireEvent.change(fieldNodePassOut, { target: { value: '' } });

    const fieldNodeButtonOut = await waitForElement(() =>
      getByTestId('form-button-signout')
    );
    fireEvent.click(fieldNodeButtonOut);
    const fieldNodeForm = await waitForElement(() =>
      getByText('*The password cannot be less than 6 characters')
    );
    expect(fieldNodeForm).toBeDefined();
  });

  it('Campo de senha for menos que 6', async () => {
    const fieldNodeNameOut = await waitForElement(() =>
      getByTestId('form-name-signout')
    );
    fireEvent.change(fieldNodeNameOut, { target: { value: 'name' } });
    const fieldNodeEmailOut = await waitForElement(() =>
      getByTestId('form-email-signout')
    );
    fireEvent.change(fieldNodeEmailOut, {
      target: { value: 'email@email.com' },
    });

    const fieldNodePassOut = await waitForElement(() =>
      getByTestId('form-pass-signout')
    );
    fireEvent.change(fieldNodePassOut, { target: { value: '123' } });

    const fieldNodeButtonOut = await waitForElement(() =>
      getByTestId('form-button-signout')
    );
    fireEvent.click(fieldNodeButtonOut);
    const fieldNodeForm = await waitForElement(() =>
      getByText('password must be at least 6 characters')
    );
    expect(fieldNodeForm).toBeDefined();
  });
});
