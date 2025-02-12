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
import JobDiscription from './components/Jobs/JobDiscription'
import Companies from './components/Admin/Companies'
import CreateCompany from './components/Admin/createCompany'
import CompanySetup from './components/Admin/CompanySetup'
import AdminJobs from './components/Admin/AdminJobs'
import PostJob from './components/Admin/PostJob'
import Applicants from './components/Admin/Applicants'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='jobs' element={<Jobs/>}/>
      <Route path='discription/:id' element={<JobDiscription/>}/>
      <Route path='browse' element={<Browse/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='admin/companies' element={<Companies/>}/>
      <Route path='admin/companies/:id' element={<CompanySetup/>}/>
      <Route path='admin/companies/register' element={<CreateCompany/>}/>
      <Route path='admin/jobs' element={<AdminJobs/>}/>
      <Route path='admin/job/post' element={<PostJob/>}/>
      <Route path='admin/jobs/:id/applicants' element={<Applicants/>}/>
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
