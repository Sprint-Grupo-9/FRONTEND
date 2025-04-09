import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './home/Header'
import Banner from './home/Banner'
import Services from './home/Services'
import Users from './system/Users'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body>
      {/* <Header/>
      <Banner/>
      <Services/>
      <Users/> */}
      <Users/>
    </body>
  </StrictMode>
)
