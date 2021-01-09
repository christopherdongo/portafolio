import React from 'react';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import './Layout.css'
import Helmet from 'react-helmet'
const Layout =({children})=>{

  return(
    <main className="container-principal">
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
export default Layout