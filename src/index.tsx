import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css'
import Login from './pages/Login/index';

import {AuthProvider} from './providers/auth'


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Login/>
    </AuthProvider>
    )
}
  
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
