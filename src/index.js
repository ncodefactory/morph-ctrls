import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContentControl } from './lib';

ReactDOM.render(
  <div>
    <ContentControl
      child={<div>ContentControl</div>}
      contentAlignment="end"
      background="#ff00bb"
      margin={{ margin: 10 }}
      padding={{ padding: 10 }}
      inline={false}
    />
    {/* <ContentControl
      margin={{ margin: 5 }}
      padding={{ padding: 5 }}
      borderStyle="dotted"
      child={<div>ContentControl</div>}
      contentAlignment="center"
      background="#00ff00"
    />
    <ContentControl
      margin={{ margin: 5 }}
      padding={{ padding: 5 }}
      borderStyle="dotted"
      child={<div>ContentControl</div>}
      contentAlignment="center"
      background="#00ff00"
      inline={false}
    />
    <ContentControl
      margin={{ margin: 5 }}
      padding={{ padding: 5 }}
      borderStyle="dotted"
      child={<div>ContentControl</div>}
      contentAlignment="center"
      background="#00ff00"
    />
    <ContentControl
      margin={{ margin: 5 }}
      padding={{ padding: 5 }}
      borderStyle="dotted"
      child={<div>ContentControl</div>}
      contentAlignment="center"
      background="#00ff00"
    /> */}
  </div>,
  document.getElementById('root'),
);
