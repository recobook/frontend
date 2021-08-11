import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css'
import Login from './pages/Login/index';

const App: React.FC = () => {
  return (
    <Login>
    </Login>
    )
}
  
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
