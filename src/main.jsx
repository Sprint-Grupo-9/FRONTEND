import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header from './home/Header'
import Banner from './home/Banner'
import Services from './home/Services'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body>
      <Header />
      <Banner />
      <Services />
    </body>
  </StrictMode>

)
