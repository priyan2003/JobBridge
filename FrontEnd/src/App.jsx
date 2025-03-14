import './App.css'
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
import CreateCompany from './components/Admin/CreateCompany'
import CompanySetup from './components/Admin/CompanySetup'
import AdminJobs from './components/Admin/AdminJobs'
import PostJob from './components/Admin/PostJob'
import Applicants from './components/Admin/Applicants'
import ProtectedRoute from './components/Admin/ProtectedRoute'

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
      {/* admins Routes */}
      <Route path='admin/companies' element={<ProtectedRoute><Companies/></ProtectedRoute>}/>
      <Route path='admin/companies/:id' element={<ProtectedRoute><CompanySetup/></ProtectedRoute>}/>
      <Route path='admin/companies/register' element={<ProtectedRoute><CreateCompany/></ProtectedRoute>}/>
      <Route path='admin/jobs' element={<ProtectedRoute><AdminJobs/></ProtectedRoute>}/>
      <Route path='admin/job/post' element={<ProtectedRoute><PostJob/></ProtectedRoute>}/>
      <Route path='admin/jobs/:id/applicants' element={<ProtectedRoute><Applicants/></ProtectedRoute>}/>
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
