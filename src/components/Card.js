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

    return () => {
      card.removeEventListener('mouseenter', hoverHandler)
      card.removeEventListener('mouseleave', hoverHandler)
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
    cardLowerPart.classList.remove('card__box-lower-part_default_hover')
    cardUpperPart.classList.remove('card__box-upper-part_default_hover')
    cardLowerPart.classList.remove('card__box-lower-part_checked_hover')
    cardUpperPart.classList.remove('card__box-upper-part_checked_hover')
    oval.classList.toggle('card__oval_checked')
    oval.classList.remove('card__oval_checked_hover')
    oval.classList.toggle('card__oval_default')
    title.textContent = props.product.title
    title.classList.remove('card__content-title_checked_hover')
  }

  const determineClass = (str) =>
    str + ' ' + str + (props.product.available ? '_default' : '_unavailable')

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

<svg width="320" height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_0_1" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z" fill="#F2F2F2"/>
<path d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z" fill="#1698D9" mask="url(#path-1-inside-1_0_1)"/>
<mask id="path-3-inside-2_0_1" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"/>
</mask>
<path d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z" fill="#1698D9" mask="url(#path-3-inside-2_0_1)"/>
</svg>
