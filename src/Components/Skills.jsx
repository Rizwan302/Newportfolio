import React from 'react'
import '../Style.scss'



export default function Skills({value, name, logo}) {


    const renderSpans = () => {
        const spans = [];

        for (let i = 0; i < totalSpans; i++) {
            const isRed = i < redSpans; // Condition to determine if span should be red

            spans.push(
                <span key={i} className={isRed ? 'red' : ''}></span>
            );
        }

        return spans;
    };

    const totalSpans = 5;
const redSpans = value;
const renderedSpans = renderSpans(totalSpans, redSpans);
  return (
    <div className='skills'>
      <div className="content">
        <div className="imgContent">
            <p className='icon'>{logo}</p>
            <h4>{name}</h4>
        </div>

        <div className="space">
            {renderedSpans}
        </div>

      </div>
    </div>
  )
}
