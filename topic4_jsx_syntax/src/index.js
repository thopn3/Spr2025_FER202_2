import React from 'react';
import ReactDOM from 'react-dom/client';
import MySection, { PrintProduct, TextControl } from './Section';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MySection>
      <TextControl/>
      <PrintProduct title="List of Products"/>
    </MySection>
  </React.StrictMode>
);
