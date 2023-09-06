import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { TbArrowBadgeRight } from 'react-icons/tb';
import Skills from './Skills';
import { GrNode } from 'react-icons/gr';
import { SiMysql } from 'react-icons/si';
import { TbBrandMongodb } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import Card from './Card';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import {useSelector} from 'react-redux'



export default function About() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor)

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className='about'>
      <div className="firstContainer">
        <Zoom>
        <div className="imageContaner">

          <div className="imgText">
            <div className="name">
              <p>Rizwan Ahmed</p>
            </div>

            <div className="dic">
              <p className='dicText'>Ready to discuss your project?</p>
              <p>Let's super-charge your business today!</p>
            </div>
          </div>
        </div>
        </Zoom>
        <div className="textContaniner">
          <div className="hading">
            <h1>I'm Specialized in</h1>
            <h3 style={{backgroundImage: back}}> <TbArrowBadgeRight className='sideIcon' style={{color:'white'}}></TbArrowBadgeRight>
            
            <Typewriter
            words={['Back-End Developer', 'Front-End Developer', 'Modern Framework']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            
          />
            </h3>
          </div>

          <div className="SkillContaner"> 
            <h1>Back-End Development</h1>
        
            <div className="mySkill">
              <Slide right>
            <Skills value={3} name={'Node.js'} logo={<GrNode/>}/>
            </Slide>
            <Slide right>
            <Skills value={2} name={'SQL'} logo={<SiMysql/>}/>
            </Slide>
            <Slide right>
            <Skills value={2} name={'Mongodb'} logo={<TbBrandMongodb/>}/>
            </Slide>
            </div>
          </div>


          <div className="SkillContaner"> 
            <h1>Front-End UI/UX Design</h1>
        
            <div className="mySkill">
            <Slide left>
            <Skills value={4} name={'JavaScript'} logo={<TbBrandJavascript/>}/>
            </Slide>
            <Slide left>
            <Skills value={3} name={'React'} logo={<FaReact/>}/>
            </Slide>
            <Slide left>
            <Skills value={3} name={'Redux'} logo={<TbBrandRedux/>}/>
            </Slide>
            <Slide left>
            <Skills value={5} name={'Html'} logo={<TiHtml5/>}/>
            </Slide>
            <Slide left>
            <Skills value={3} name={'CSS'} logo={<IoLogoCss3/>}/>
            </Slide>
            <Slide left>
            <Skills value={4} name={'Bootsrap'} logo={<FaBootstrap/>}/>
            </Slide>
            </div>
          </div>

          <div className='aboutContent'>
            <div className="text">
              <h1><span>01.</span>About me</h1>
              <p>Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.</p>
            </div>
            <div className="text">
              <h1><span>02.</span>Interests and Hobbies</h1>
              <p>Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.</p>
            </div>
            <div className="text">
              <h1><span>03.</span>Framework Preferences</h1>
              <p>Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="secContainer">
        <Card />
        <Card/>
      </div>
    </div>
  )
}
