import React from 'react'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/shared/Footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout