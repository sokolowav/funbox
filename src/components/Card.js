import React, { useState } from 'react'

export const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false)

  const isCheckedHandler = (e) => {
    const card = e.target.closest('.card')
    const cardBox = card.querySelector('.card__box')
    const oval = card.querySelector('.card__oval')
    if (cardBox.classList.contains('card__box_unavaliable')) return

    setIsChecked(!isChecked)
    cardBox.classList.toggle('card__box_checked')
    oval.classList.toggle('card__oval_checked')
  }

  return (
    <div className='card'>
      <div
        className={
          'card__box' +
          (props.product.available ? '' : ' card__box_unavaliable')
        }
        onClick={isCheckedHandler}
      >
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
      {isChecked ? (
        <div className='card__caption'>{props.product.description}</div>
      ) : (
        <div className='card__caption'>
          Чего сидишь? Порадуй котэ,{' '}
          <span className='card__caption-link' onClick={isCheckedHandler}>
            купи
          </span>
          <span className='card__caption-dot'>.</span>
        </div>
      )}
    </div>
  )
}
