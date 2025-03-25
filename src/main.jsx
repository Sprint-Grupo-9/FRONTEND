import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './site/App.jsx'

createRoot(document.getElementById('root')).render(

  
   <StrictMode>
    <App/>
    <h1>Nome</h1>
  </StrictMode>,
)
