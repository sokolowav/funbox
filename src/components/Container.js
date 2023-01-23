import React from 'react'
import { data } from '../data'
import { Card } from './Card'

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
