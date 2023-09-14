import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Use BrowserRouter to wrap your application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);