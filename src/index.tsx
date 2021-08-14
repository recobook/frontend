import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import './styles.css'

import Routes from './routes';


import {AuthProvider} from './providers/auth'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </BrowserRouter>
    )
}
  
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
