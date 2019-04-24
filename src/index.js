import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContentControl } from './lib';

ReactDOM.render(
  <div>
    <ContentControl
      background="#ff0000"
      foreground="#ffffff"
      contentAlignment="center"
      margin={{ margin: 10 }}
      padding={{ padding: 10 }}
    >
      Mollit nostrud non ut tempor adipisicing sunt ea esse et proident. Laborum proident et aliqua
      quis consectetur sint duis incididunt eu amet est tempor. Elit nulla incididunt Lorem laborum
      et incididunt culpa qui magna ea adipisicing.
    </ContentControl>
    <ContentControl
      background="#00ff00"
      foreground="#ffffff"
      contentAlignment="center"
      margin={{ margin: 10 }}
      padding={{ padding: 10 }}
    >
      Qui proident ad officia nostrud nulla qui adipisicing occaecat tempor consectetur
      reprehenderit magna velit enim. Mollit adipisicing duis consectetur do. Nostrud ullamco quis
      nisi ad excepteur proident et occaecat mollit aliqua Lorem proident mollit. Quis ea
      reprehenderit excepteur eu velit sunt dolore ex nostrud excepteur occaecat irure. Laboris
      velit in quis ea dolor. Sint sit aliquip culpa ullamco et elit duis Lorem laboris ea pariatur
      aute.
    </ContentControl>
    <ContentControl
      background="#0000ff"
      foreground="#ffffff"
      contentAlignment="center"
      margin={{ margin: 10 }}
      padding={{ padding: 10 }}
    >
      Officia nisi qui occaecat velit adipisicing Lorem irure culpa cillum ullamco ad minim enim.
      Aliqua adipisicing deserunt consectetur occaecat do. Excepteur aute ad velit aliqua excepteur
      eiusmod voluptate pariatur proident reprehenderit. Nisi tempor cillum enim fugiat officia
      aliqua laborum laboris voluptate laborum pariatur. Qui commodo cupidatat dolor elit esse eu.
      Ipsum sit ipsum aute fugiat anim. Consectetur elit nostrud irure consequat pariatur eu.
    </ContentControl>
  </div>,
  document.getElementById('root'),
);
