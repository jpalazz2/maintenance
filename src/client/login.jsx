// @flow strict
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from './ui/login/LoginForm';
import PageContainer from './ui/lib/PageContainer';

import './login.css';

ReactDOM.render(
  <PageContainer className="login-root">
    <LoginForm />
  </PageContainer>,
  document.getElementById('root'),
);
