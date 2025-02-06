import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider,Route ,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Layout from './Layout'
import Jobs from './components/Jobs/Jobs'
import Browse from './components/Browse/Browse'
import Profile from './components/Profile/Profile'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='jobs' element={<Jobs/>}/>
      <Route path='browse' element={<Browse/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='profile' element={<Profile/>}/>
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
