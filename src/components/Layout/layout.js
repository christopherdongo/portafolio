import React from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

import './Layout.css'
const Layout =({children})=>{

  return(
    <main className="container-principal">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
export default Layout