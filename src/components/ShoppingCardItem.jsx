import React from 'react'

export default function ShoppingCardItem({item}) {
  return (
    <div className='shopping-card__item'>
        {item.name}
    </div>
  )
}
