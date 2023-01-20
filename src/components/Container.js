import React from 'react'
import { data } from '../data'
import { CardBoard } from './CardBoard'

export const Container = () => {
  return (
    <div className='container'>
      <div className='heading'>Ты сегодня покормил кота?</div>
      <CardBoard data={data} />
    </div>
  )
}
