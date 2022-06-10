import React from 'react'

export default function ShoppingCardItem({item, handleShoppingCardItemDelete}) {
  return (
    <div className='shopping-card__item' key={item.id}>
        <div className='shopping-card__item-name'>{item.name}</div>
        <button className='btn shopping-card__item-btn-delete' onClick={() => handleShoppingCardItemDelete(item.id)}>&times;</button>
    </div>
  )
}
