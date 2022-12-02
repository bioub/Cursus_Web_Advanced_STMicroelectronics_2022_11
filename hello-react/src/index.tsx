import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
// }, 1000)


// Sans React (juste avec le DOM)
// import App from "./App";
// setInterval(() => {
//   document.body.innerHTML = ''
//   document.body.append(App());
// }, 1000)