// src/bootstrap.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mock/mock';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

worker.start().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
})