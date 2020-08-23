// @flow
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<string>,
  inline: true,
};

function Text(props: Props): Element<'span'> {
  const { children, inline, ...rest } = props;

  return <span {...rest}>{children}</span>;
}

export default Text;
