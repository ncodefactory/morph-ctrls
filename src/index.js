import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContentControl } from './lib';

ReactDOM.render(
  <ContentControl child={<div>ContentControl</div>} />,
  document.getElementById('root'),
);
