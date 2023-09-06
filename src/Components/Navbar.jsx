import React, { useState } from 'react';
import '../Style.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { SlUser } from 'react-icons/sl';
import { MdOutlineHomeRepairService } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { BsEnvelope } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



export default function Navbar() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor);
  


  return (
    <div className='navbar'>

      <div className="nav">
        <ul>
          <li>
            <NavLink to="/"  className="active" style={{backgroundColor: back}} >
              <span>Home</span>
              {<AiOutlineHome className='NavbarIcon' />}
            </NavLink></li>

          <li>
            <NavLink to="/home2" className="active">
              <span>Home 2</span>
              {<AiOutlineHome className='NavbarIcon' />}</NavLink>
          </li>

          <li><NavLink to="/about" className="active">
            <span>About</span>
            {<SlUser className='NavbarIcon' />}</NavLink></li>
          <li>
            <NavLink to="/services" className="active">
            <span>Services</span>
            {<MdOutlineHomeRepairService className='NavbarIcon' />}</NavLink></li>
          <li><NavLink to="/project" className="active">
            <span>Project</span>
            {<GiTrophyCup className='NavbarIcon' />}</NavLink></li>
          <li><NavLink to="/message" className="active" >
            <span>Contact</span>

            {<BsEnvelope className='NavbarIcon' />}</NavLink></li>
          <li><NavLink href="">
            <span>Linkedin</span>

            {<SlSocialLinkedin className='NavbarIcon' />}</NavLink></li>
          <li><NavLink href="">
            <span>GitHub</span>

            {<FiGithub className='NavbarIcon' />}</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
