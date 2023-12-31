import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* import './index.css' */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { UserProvider} from './providers/UserContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <App /> 
    </UserProvider>
  </React.StrictMode>,
)
