import React, { useEffect, useRef, useState } from 'react'

export const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const currentCard = useRef()

  useEffect(() => {
    const card = currentCard.current
    const cardLowerPart = card.querySelector('.card__box-lower-part')
    const cardUpperPart = card.querySelector('.card__box-upper-part')
    const oval = cardLowerPart.querySelector('.card__oval')
    const title = cardUpperPart.querySelector('.card__content-title')

    const hoverHandler = (e) => {
      if (!props.product.available) return
      console.log(e.target, e.relatedTarget)
      if (!isChecked) {
        cardUpperPart.classList.toggle('card__box-upper-part_default_hover')
        cardLowerPart.classList.toggle('card__box-lower-part_default_hover')
        oval.classList.toggle('card__oval_default_hover')
      } else if (isChecked) {
        if (e.type === 'mouseenter') {
          cardUpperPart.classList.add('card__box-upper-part_checked_hover')
          cardLowerPart.classList.add('card__box-lower-part_checked_hover')
          oval.classList.add('card__oval_checked_hover')
          title.textContent = 'Котэ не одобряет?'
          title.classList.add('card__content-title_checked_hover')
        } else {
          cardUpperPart.classList.remove('card__box-upper-part_checked_hover')
          cardLowerPart.classList.remove('card__box-lower-part_checked_hover')
          oval.classList.remove('card__oval_checked_hover')
          title.textContent = props.product.title
          title.classList.remove('card__content-title_checked_hover')
        }
      }
    }

    card.addEventListener('mouseenter', hoverHandler)
    card.addEventListener('mouseleave', hoverHandler)
    /* cardLowerPart.addEventListener('mouseenter', hoverHandler)
    cardLowerPart.addEventListener('mouseleave', hoverHandler) */

    return () => {
      card.removeEventListener('mouseenter', hoverHandler)
      card.removeEventListener('mouseleave', hoverHandler)
      /* cardLowerPart.removeEventListener('mouseenter', hoverHandler)
      cardLowerPart.removeEventListener('mouseleave', hoverHandler) */
    }
  }, [isChecked, props.product.title, props.product.available])

  const isCheckedHandler = () => {
    if (!props.product.available) return
    const cardLowerPart = currentCard.current.querySelector(
      '.card__box-lower-part'
    )
    const cardUpperPart = currentCard.current.querySelector(
      '.card__box-upper-part'
    )
    const oval = cardLowerPart.querySelector('.card__oval')
    const title = cardUpperPart.querySelector('.card__content-title')

    setIsChecked(!isChecked)
    cardLowerPart.classList.toggle('card__box-lower-part_checked')
    cardUpperPart.classList.toggle('card__box-upper-part_checked')
    cardLowerPart.classList.toggle('card__box-lower-part_default')
    cardUpperPart.classList.toggle('card__box-upper-part_default')
    cardLowerPart.classList.toggle('card__box-lower-part_default_hover')
    cardUpperPart.classList.toggle('card__box-upper-part_default_hover')
    cardLowerPart.classList.remove('card__box-lower-part_checked_hover')
    cardUpperPart.classList.remove('card__box-upper-part_checked_hover')
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
      <div className='card__box' onClick={isCheckedHandler} ref={currentCard}>
        <div className={determineClass('card__box-upper-part')}>
          <span className={determineClass('card__content-title')}>
            {props.product.title}
          </span>
        </div>
        <div className={determineClass('card__box-lower-part')}>
          <div className='card__content'>
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
    </div>
  )
}
