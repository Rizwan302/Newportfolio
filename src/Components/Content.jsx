import React from 'react'
import Navbar from './Navbar';
import '../Style.scss'
import Home from './Home';
import { Route, Routes} from 'react-router-dom'
import About from './About';
import Home2 from './Home2';
import Services from './Services';
import Project from './Project';
import MessagBox from './MessagBox';



export default function Content() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home2' element={<Home2/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/message' element={<MessagBox/>} />
      </Routes>
    </div>
  )
}
