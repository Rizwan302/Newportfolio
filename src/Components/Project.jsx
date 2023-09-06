import React from 'react'
import { BiCodeAlt } from 'react-icons/bi';
import { PiStarThin } from 'react-icons/pi';
import { BiShare } from 'react-icons/bi';
import {useSelector} from 'react-redux';
import Fade from 'react-reveal/Fade';



export default function Project() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor)

  return (
    <div className='project'>
      <div className="contenter">
        <div className="one">
            <h1>My Open-Source Projects</h1>
            <p>Discover my most popular open-source projects on Github.</p>
        </div>


        <div className="cards">
            <Fade left>
            <div className="cardContent" style={{background: back}}>
                <div className="text">
                    <h1>leerob/<span>leerob.io</span></h1>
                    <p>✨ My portfolio built with Next.js, Tailwind CSS, PlanetScale, and Vercel.</p>
                </div>
                <div className="">
                    <p><BiCodeAlt className='icon'/> React.js</p>
                    <p><PiStarThin className='icon'/> 5824</p>
                    <p><BiShare className='icon'/> 1172</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="cardContent" style={{background: back}}>
                <div className="text">
                    <h1>leerob/<span>leerob.io</span></h1>
                    <p>✨ My portfolio built with Next.js, Tailwind CSS, PlanetScale, and Vercel.</p>
                </div>
                <div className="">
                    <p><BiCodeAlt className='icon'/> React.js</p>
                    <p><PiStarThin className='icon'/> 5824</p>
                    <p><BiShare className='icon'/> 1172</p>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className="cardContent" style={{background: back}}>
                <div className="text">
                    <h1>leerob/<span>leerob.io</span></h1>
                    <p>✨ My portfolio built with Next.js, Tailwind CSS, PlanetScale, and Vercel.</p>
                </div>
                <div className="">
                    <p><BiCodeAlt className='icon'/> React.js</p>
                    <p><PiStarThin className='icon'/> 5824</p>
                    <p><BiShare className='icon'/> 1172</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="cardContent" style={{background: back}}>
                <div className="text">
                    <h1>leerob/<span>leerob.io</span></h1>
                    <p>✨ My portfolio built with Next.js, Tailwind CSS, PlanetScale, and Vercel.</p>
                </div>
                <div className="">
                    <p><BiCodeAlt className='icon'/> React.js</p>
                    <p><PiStarThin className='icon'/> 5824</p>
                    <p><BiShare className='icon'/> 1172</p>
                </div>
            </div>
            </Fade>
        </div>
      </div>
    </div>
  )
}
