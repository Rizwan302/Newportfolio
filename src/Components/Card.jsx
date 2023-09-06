import React from 'react'
import InerCard from './InerCard';
import {useSelector} from 'react-redux';

export default function Card() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor)

  return (
    <div className='cards'>
      <h1>Employment</h1>
      <div className="color" style={{background: back}}></div>

      <div className="cardcontent">
        <InerCard/>
        <InerCard/>
        <InerCard/>
      </div>
    </div>
  )
}
