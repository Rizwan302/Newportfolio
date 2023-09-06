import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs';
import {useSelector} from 'react-redux';



export default function MessagBox() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor)

  return (
    <div className='messagBox'>
      <div className="main">
        <div className="TextContent">
          <div className="hading">
            <h1>Get in touch</h1>
            <h1 style={{backgroundImage: back}}>Let's talk about your project</h1>
          </div>

          <div className="par">
            <p>Thinking about a new project, a problem to solve, or just want to connect? Let's do it!</p>
            <p>Use the form on this page or get in touch by other means.</p>
          </div>

          <div className="contentBar">
            <div className="iner">
              <BsTelephoneFill className='icon'/> <p>Phone: (888) 777-6666</p>
            </div>
            <div className="iner">
              <IoMdMail className='icon'/> <p>Email: <a href="">hello@carl.io</a></p>
            </div>
            <div className="iner">
              <AiFillLinkedin className='icon'/> <p>Linkedin: <a href="">Rizwan Ahmed</a></p>
            </div>
            <div className="iner">
              <AiFillInstagram className='icon'/> <p>Twitter: <a href="">Rizwanahmed5085</a></p>
            </div>
          </div>
        </div>

        <div className="messagBar">
          <div className="">
            <input type="text" name="name" id="" placeholder='First Name'/>
            <input type="text" name="name" id="" placeholder='Last Name'/>
          </div>
          <div className="">
            <input type="text" name="name" id="" placeholder='Email'/>
            <input type="text" name="name" id="" placeholder='Phone'/>
          </div>
          <div className="">
            <input type="text" className='subject' name="name" id="" placeholder='Subject'/>
          </div>
          <div className="">
            <textarea name="" id="" cols="15" rows="10" placeholder='Enter your Message...'></textarea>
          </div>

          <div className='main'>
            <a href="">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}
