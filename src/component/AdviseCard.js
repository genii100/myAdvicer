import React from 'react'
import './AdviseCard.css';

const AdviseCard = (props) => {
  return (
    <div className='card'>
        <div className='cardInfo'>
            <h6>{props.text}</h6>
        </div>
    </div>
  )
}

export default AdviseCard
