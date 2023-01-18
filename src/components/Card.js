import React from 'react'

export const Card = () => {
  return (
    <div className='card'>
      <div className='card__box'>
        <div className='card__content'>
          <span className='card__content-title'>Сказочное заморское яство</span>
          <h1 className='card__content-name'>Нямушка</h1>
          <h1 className='card__content-taste'>с фуа-гра</h1>
          <span className='card__content-amount'>10 порций</span>
          <span className='card__content-bonus'>мышь в подарок</span>
          <span className='card__content-result'></span>
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
