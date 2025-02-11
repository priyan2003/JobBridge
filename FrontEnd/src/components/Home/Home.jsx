import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth);
  const naviagte = useNavigate();
  useEffect(()=>{
    if(user?.role==='recruiter'){
      naviagte('/admin/companies');
    }
  },[]);
  return (
    <div>
     <HeroSection/>
     <CategoryCarousel/>
     <LatestJobs/>
     <Footer/>
    </div>
  )
}

export default Home