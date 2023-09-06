import React from 'react'
import { GoDeviceDesktop } from 'react-icons/go';
import '../Style.scss';
import {useSelector} from 'react-redux';
import Zoom from 'react-reveal/Zoom';



export default function Services() {
    const back = useSelector((state) => state.ChangeCOlors.backgroundColor)

  return (
    <div className='services'>
      <div className="main">
        <div className="fristCOntent">
            <div className="one">
                <h1>Services</h1>
                <h1>My Expertise</h1>
            </div>

            <div className="two">
                <p>Solving problems</p>
                <p>I design products that are more than pretty. I make them shippable and usable. Et tempor non mollit dolor et do aute voluptate ea ullamco</p>
            </div>

            <div className="three">
                <h2>What you can expect</h2>
                <ul>
                    <li>Design Strategy</li>
                    <li>Web and Mobile App Design</li>
                    <li>Front-end Development</li>
                </ul>
            </div>
        </div>

        <div className="secContent">
            <Zoom>
            <div className="card">
                <div className="icon" style={{background: back}}>
                    <GoDeviceDesktop className='icons'/>
                    <h1>Web App Design</h1>
                </div>

                <div className="text">
                    <p>Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.</p>

                    <ul>
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>
                    </ul>
                </div>
            </div>
            </Zoom>

            <Zoom>
            <div className="card">
                <div className="icon" style={{background: back}}>
                    <GoDeviceDesktop className='icons'/>
                    <h1>Web App Design</h1>
                </div>

                <div className="text">
                    <p>Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.</p>

                    <ul>
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>
                    </ul>
                </div>
            </div>
            </Zoom>
        </div>
      </div>
    </div>
  )
}
