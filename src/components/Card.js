import React, { useEffect, useRef, useState } from 'react'
import { Border } from './Border'
import { classes } from '../classes'

export const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const currentCard = useRef()

  useEffect(() => {
    if (!props.product.available) return

    const card = currentCard.current.querySelector('.card__box')
    const border = card.querySelector('.card__box-border')
    const oval = card.querySelector('.card__oval')
    const title = card.querySelector('.card__content-title')
    const link = currentCard.current.querySelector('.card__caption-link')

    const hoverHandler = (e) => {
      if (!isChecked) {
        if (!link) return
        if (e.type === 'mouseenter') {
          border.className.baseVal = classes.BORDER_DEFAULT_HOVER
          oval.className = classes.OVAL_DEFAULT_HOVER
          link.className = classes.LINK_DEFAULT_HOVER
        } else {
          border.className.baseVal = classes.BORDER_DEFAULT
          oval.className = classes.OVAL_DEFAULT
          link.className = classes.LINK_DEFAULT
        }
      } else if (isChecked) {
        if (e.type === 'mouseenter') {
          border.className.baseVal = classes.BORDER_CHECKED_HOVER
          oval.className = classes.OVAL_CHECKED_HOVER
          title.className = classes.TITLE_CHECKED_HOVER
          title.textContent = 'Котэ не одобряет?'
        } else {
          border.className.baseVal = classes.BORDER_CHECKED
          oval.className = classes.OVAL_CHECKED
          title.className = classes.TITLE_CHECKED
          title.textContent = props.product.title
        }
      }
    }

    card.addEventListener('mouseenter', hoverHandler)
    card.addEventListener('mouseleave', hoverHandler)
    link?.addEventListener('mouseenter', hoverHandler)
    link?.addEventListener('mouseleave', hoverHandler)

    return () => {
      card.removeEventListener('mouseenter', hoverHandler)
      card.removeEventListener('mouseleave', hoverHandler)
      link?.removeEventListener('mouseenter', hoverHandler)
      link?.removeEventListener('mouseleave', hoverHandler)
    }
  }, [isChecked, props.product.title, props.product.available])

  const isCheckedHandler = () => {
    if (!props.product.available) return
    const card = currentCard.current.querySelector('.card__box')
    const border = card.querySelector('.card__box-border')
    const oval = card.querySelector('.card__oval')
    const title = card.querySelector('.card__content-title')

    if (isChecked) {
      border.className.baseVal = classes.BORDER_DEFAULT_HOVER
      oval.className = classes.OVAL_DEFAULT_HOVER
      title.className = classes.TITLE_DEFAULT
      title.textContent = props.product.title
    } else {
      border.className.baseVal = classes.BORDER_CHECKED
      oval.className = classes.OVAL_CHECKED
    }

    setIsChecked(!isChecked)
  }

  const determineClass = (str) =>
    `${str} ${str}${props.product.available ? '_default' : '_unavailable'}`

  return (
    <div className='card' ref={currentCard}>
      <div className='card__box' onClick={isCheckedHandler}>
        <Border borderColor={determineClass('card__box-border')} />
        <div className={determineClass('card__content')}>
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
      <div className={determineClass('card__caption')}>
        {props.product.available ? (
          isChecked ? (
            <span>{props.product.description}</span>
          ) : (
            <span>
              Чего сидишь? Порадуй котэ,{' '}
              <span className='card__caption-link' onClick={isCheckedHandler}>
                купи.
              </span>
            </span>
          )
        ) : (
          <span>Печалька, {props.product.taste} закончился.</span>
        )}
      </div>
    </div>
  )
}
