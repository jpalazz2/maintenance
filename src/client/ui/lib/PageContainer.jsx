// @flow strict
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { classMerge } from '../../lib/css';

import type { Element, Node } from 'react';

import './PageContainer.css';

type Props = {|
  children: Node,
  className?: string,
|};

function PageContainer(props: Props): Element<'div'> {
  const { children, className, ...rest } = props;
  return (
    <div className={classMerge(className, 'PageContainer-root')} {...rest}>
      {children}
    </div>
  );
}

export default PageContainer;
