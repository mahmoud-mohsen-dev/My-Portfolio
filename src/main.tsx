import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import './index.css';
import { inject } from '@vercel/analytics';
inject();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
