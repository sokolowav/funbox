import React, { useState, useRef } from 'react'
import { Border } from './Border'

export const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const link = useRef()

  const isCheckedHandler = (e) => {
    if (!props.product.available) return
    if (e.target === link.current) {
      setIsHovered(false)
      setIsChecked(true)
      return
    }
    if (!isChecked) setIsHovered(false)
    if (isChecked && !isHovered) setIsHovered(true)
    setIsChecked(!isChecked)
  }

  const isHoveredHandler = (e) => {
    if (!props.product.available) return
    e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false)
  }

  const determineClass = (str) => {
    if (!props.product.available) return `${str} ${str}_unavailable`
    if (!isChecked && !isHovered) return `${str} ${str}_default`
    if (!isChecked && isHovered)
      return `${str} ${str}_default ${str}_default_hover`
    if (isChecked && !isHovered) return `${str} ${str}_checked`
    if (isChecked && isHovered)
      return `${str} ${str}_checked ${str}_checked_hover`
  }

  return (
    <div className='card'>
      <div
        className='card__box'
        onClick={isCheckedHandler}
        onMouseEnter={isHoveredHandler}
        onMouseLeave={isHoveredHandler}
      >
        <Border borderColor={determineClass('card__box-border')} />
        <div className={determineClass('card__content')}>
          {isChecked && isHovered ? (
            <span className={determineClass('card__content-title')}>
              Котэ не одобряет?
            </span>
          ) : (
            <span className={determineClass('card__content-title')}>
              {props.product.title}
            </span>
          )}

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
              <span
                className={determineClass('card__caption-link')}
                ref={link}
                onClick={isCheckedHandler}
                onMouseEnter={isHoveredHandler}
                onMouseLeave={isHoveredHandler}
              >
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
