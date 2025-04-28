import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header from './home/Header'
import Banner from './home/Banner'
import Services from './home/Services'
import Sobre from './home/Sobre'
import Equipe from './home/Equipe'
import Footer from './home/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <body>
        <Header />
        <Banner />
        <Services />
        <Sobre />
        <Equipe />
        <Footer />
      </body>
    </>
  </StrictMode>

)
