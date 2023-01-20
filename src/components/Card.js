import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__box'>
        <div className='card__content'>
          <span className='card__content-title'>Сказочное заморское яство</span>
          <h1 className='card__content-name'>Нямушка</h1>
          <h1 className='card__content-taste'>{props.product.taste}</h1>
          <span className='card__content-amount'>{props.product.amount}</span>
          <span className='card__content-bonus'>{props.product.bonus}</span>
          <span className='card__content-result'>{props.product.result}</span>
        </div>
        <div className='card__oval'>
          <span className='card__content-weight'>{props.product.weight}</span>
          <span className='card__content-unit'>кг</span>
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
