import React from 'react'
import { Card } from './Card'
import { data } from '../data'

export const Container = () => {
  return (
    <div className='container'>
      <div className='heading'>Ты сегодня покормил кота?</div>
      <div className='card-board'>
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
