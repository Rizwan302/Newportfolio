import React, { useState } from 'react'
import '../Style.scss';
import { CiPalette } from 'react-icons/ci';
import {useSelector, useDispatch} from 'react-redux';
import {chColor1, chColor2, chColor3, chColor4} from '../actions/index';


export default function Color() {
  const back = useSelector((state) => state.ChangeCOlors.backgroundColor)
  const dis = useDispatch();
  // console.log(backgroundColor)
  return (
    <div className='color'>
      <div className="ColorIcon">
        <CiPalette className='clipeImg'  alt="" />
      </div>
      <div className="setColors">
        <div className="Box_1 Box" onClick={()=> dis(chColor1())} ></div>
        <div className="Box_2 Box" onClick={()=> dis(chColor2())}></div>
        <div className="Box_3 Box" onClick={()=> dis(chColor3())}></div>
        <div className="Box_4 Box" onClick={()=> dis(chColor4())}></div>
      </div>
    </div>
  )
}
