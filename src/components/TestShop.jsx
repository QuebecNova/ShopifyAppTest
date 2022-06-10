import React from 'react'
import ShopItem from './ShopItem'

export default function TestShop(props) {
  const {
    StoreItems,
    handleAddItemToCard
  } = props

  return (
    <div className='wrapper__test-shop'>
        <ShopItem 
          StoreItems={StoreItems} 
          handleAddItemToCard={handleAddItemToCard}
        />
    </div>
  )
}
