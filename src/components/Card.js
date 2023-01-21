import React, { useEffect, useRef, useState } from 'react'

export const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const currentCard = useRef()

  useEffect(() => {
    const card = currentCard.current
    const oval = card.querySelector('.card__oval')
    const title = card.querySelector('.card__content-title')

    const hoverHandler = (e) => {
      if (!props.product.available) return
      if (!isChecked) {
        card.classList.toggle('card__box_default_hover')
        oval.classList.toggle('card__oval_default_hover')
      } else if (isChecked) {
        if (e.type === 'mouseenter') {
          card.classList.add('card__box_checked_hover')
          oval.classList.add('card__oval_checked_hover')
          title.textContent = 'Котэ не одобряет?'
          title.classList.add('card__content-title_checked_hover')
        } else {
          card.classList.remove('card__box_checked_hover')
          oval.classList.remove('card__oval_checked_hover')
          title.textContent = props.product.title
          title.classList.remove('card__content-title_checked_hover')
        }
      }
    }

    card.addEventListener('mouseenter', hoverHandler)
    card.addEventListener('mouseleave', hoverHandler)

    return () => {
      card.removeEventListener('mouseenter', hoverHandler)
      card.removeEventListener('mouseleave', hoverHandler)
    }
  }, [isChecked, props.product.title, props.product.available])

  const isCheckedHandler = (e) => {
    const card = currentCard.current
    const oval = card.querySelector('.card__oval')
    const title = card.querySelector('.card__content-title')

    if (!props.product.available) return

    setIsChecked(!isChecked)
    card.classList.toggle('card__box_checked')
    card.classList.remove('card__box_checked_hover')
    card.classList.toggle('card__box_default')
    oval.classList.toggle('card__oval_checked')
    oval.classList.remove('card__oval_checked_hover')
    oval.classList.toggle('card__oval_default')
    title.textContent = props.product.title
    title.classList.remove('card__content-title_checked_hover')
  }

  const determineClass = (str) => {
    return (
      str + ' ' + str + (props.product.available ? '_default' : '_unavailable')
    )
  }

  return (
    <div className='card'>
      <div
        ref={currentCard}
        className={determineClass('card__box')}
        onClick={isCheckedHandler}
      >
        <div className='card__content'>
          <span className={determineClass('card__content-title')}>
            {props.product.title}
          </span>
          <h1 className={determineClass('card__content-name')}>
            {props.product.name}
          </h1>
          <h1 className={determineClass('card__content-taste')}>
            {props.product.taste}
          </h1>
          <span className={determineClass('card__content-amount')}>
            {props.product.amount}
          </span>
          <span className={determineClass('card__content-bonus')}>
            {props.product.bonus}
          </span>
          <span className={determineClass('card__content-result')}>
            {props.product.result}
          </span>
        </div>
        <div className={determineClass('card__oval')}>
          <span className='card__content-weight'>{props.product.weight}</span>
          <span className='card__content-unit'>кг</span>
        </div>
      </div>
      {props.product.available ? (
        isChecked ? (
          <div className={determineClass('card__caption')}>
            {props.product.description}
          </div>
        ) : (
          <div className={determineClass('card__caption')}>
            Чего сидишь? Порадуй котэ,{' '}
            <span className='card__caption-link' onClick={isCheckedHandler}>
              купи
            </span>
            <span className='card__caption-dot'>.</span>
          </div>
        )
      ) : (
        <div className={determineClass('card__caption')}>
          Печалька, {props.product.taste} закончился.
        </div>
      )}
    </div>
  )
}
