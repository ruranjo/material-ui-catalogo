import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, Navbar } from '..'

const RouterLayout:React.FC<{}> = () => {
  return (
    <>
        <Header/>
        <Navbar/>
          <Outlet/>
        <Footer/>
    </>
  )
}

export default RouterLayout