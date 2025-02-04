import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider,Route ,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Layout from './Layout'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
