import React from 'react'
import '../Style.scss'
import { Typewriter } from 'react-simple-typewriter';
import {useSelector} from 'react-redux'

export default function Home() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor)

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className='home'>
      <div className="contaner">
        <div className="textContaner">
          <h1> <Typewriter
            words={['Rizwan Ahmed']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
          </h1>
          <h2 className='border_color' style={{backgroundImage: back}}>Web Developer & Growth Consultant</h2>
          <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.</p>


          <div className="experience">

            <div className="eOne exp">
              <p className='year' style={{backgroundImage: back}}>6+</p>
              <p style={{color:'#ffff'}}>Years of experience</p>
            </div>
            <div className="eOne exp">
              <p className='year' style={{backgroundImage: back}}>10+</p>
              <p style={{color:'#ffff'}}>Projects Completed</p>
            </div>
            <div className="eOne exp">
              <p className='year' style={{backgroundImage: back}}>5</p>
              <p style={{color:'#ffff'}}>OpenSource Libraries</p>
            </div>
          </div>


          <div className='main'>
            <a href="">Download Resume</a>
          </div>


            </div>

            <div className="ImgContaner">
              {/* <img src="https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" /> */}
            </div>
          </div>
        </div>
        )
}
