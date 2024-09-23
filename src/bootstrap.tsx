// src/bootstrap.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mock/mock';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  return worker.start()
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
})