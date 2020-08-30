// @flow strict
'use strict';

import gapi from 'gapi';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import type { Element } from 'react';

import './GoogleLoginButton.css';

type Props = {|
  onSuccess: (GoogleUser) => void,
  onFailure: () => void,
|};

function GoogleLoginButton({
  onSuccess,
  onFailure,
  ...rest
}: Props): Element<'div' | 'button'> {
  useEffect(() => {
    gapi.signin2.render('glogin', {
      scope: 'email profile',
      theme: 'dark',
      longtitle: true,
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  }, []);
  return <div className="GoogleLoginButton-root" id="glogin" {...rest}></div>;
}

export default GoogleLoginButton;
