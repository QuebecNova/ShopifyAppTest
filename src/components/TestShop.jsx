import React from 'react'
import ShopItem from './ShopItem'

export default function TestShop(props) {
  const {
    bicycleBlue,
    handleAddItemToCard
  } = props

  return (
    <div className='wrapper__test-shop'>
        <ShopItem bicycleBlue={bicycleBlue} handleAddItemToCard={handleAddItemToCard}/>
    </div>
  )
}
