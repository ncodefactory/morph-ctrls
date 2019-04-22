import React from 'react';
import ReactDOM from 'react-dom';
import ContentControl from './ContentControl';

describe('ContentControl', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContentControl />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
