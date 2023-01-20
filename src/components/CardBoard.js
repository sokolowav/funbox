import React from 'react'
import { Card } from './Card'

export const CardBoard = (props) => {
  return (
    <div className='card-board'>
      {props.data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
