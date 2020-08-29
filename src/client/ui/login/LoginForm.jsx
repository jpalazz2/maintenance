// @flow strict
'use strict';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import GoogleLoginButton from './GoogleLoginButton';
import Text from '../lib/Text';

import type { Element } from 'react';

import './LoginForm.css';

function onSuccess(user: GoogleUser): void {
  console.log(user.getBasicProfile().getEmail());
}

function onFailure(): void {
  console.log('Google login failed!');
}

function LoginForm(): Element<'div'> {
  return (
    <div className="LoginForm-root">
      <Text size="large">Login with Google to continue:</Text>
      <GoogleLoginButton onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
}

export default LoginForm;
