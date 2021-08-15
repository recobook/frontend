import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import './styles.css'

import Routes from './routes';


import {AuthProvider} from './providers/auth'
import {EloProvider} from './providers/elos'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EloProvider>
          <Routes/>
        </EloProvider>
      </AuthProvider>
    </BrowserRouter>
    )
}
  
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
