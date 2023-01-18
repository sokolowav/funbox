import React from 'react'

export const Card = () => {
  return (
    <div className='card'>
      <div className='card__box'>карточка</div>
      <div className='card__caption'>
        Чего сидишь? Порадуй котэ,{' '}
        <span className='card__caption-link'>купи</span>
        <span className='card__caption-dot'>.</span>
      </div>
    </div>
  )
}
