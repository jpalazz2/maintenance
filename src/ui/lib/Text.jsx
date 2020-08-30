// @flow
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import type { ChildrenArray, Element } from 'react';

import './Text.css';

type Props = {|
  children: ChildrenArray<string>,
  size?: 'small' | 'regular' | 'large' | 'xlarge',
|};

function Text({ children, size, ...rest }: Props): Element<'span'> {
  return (
    <span className={'Text-' + (size ?? 'regular')} {...rest}>
      {children}
    </span>
  );
}

export default Text;
