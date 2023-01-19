import React from 'react'
import { data } from '../data'

export const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__box'>
        <div className='card__content'>
          <span className='card__content-title'>Сказочное заморское яство</span>
          <h1 className='card__content-name'>Нямушка</h1>
          <h1 className='card__content-taste'>{data[0].taste}</h1>
          <span className='card__content-amount'>{data[0].amount}</span>
          <span className='card__content-bonus'>{data[0].bonus}</span>
          <span className='card__content-result'>{data[0].result}</span>
        </div>
      </div>
      <div className='card__caption'>
        Чего сидишь? Порадуй котэ,{' '}
        <span className='card__caption-link'>купи</span>
        <span className='card__caption-dot'>.</span>
      </div>
    </div>
  )
}
