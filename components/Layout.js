import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children,title}) => {
  return (
    <div>
        <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
      </Head>
        
        {children}
        
    </div>
  )
}

export default Layout