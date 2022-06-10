import React from 'react'

import ShoppingCardItem from './ShoppingCardItem'

export default function ShoppingCard({shoppingCardItems, handleShoppingCardItemDelete}) {

  return (
    <div className='wrapper__shopping-card'>
        <p>Shopping card</p>
        <div className='wrapper__shoping-card-items'>
            {shoppingCardItems.map((item, index) => {
                return <ShoppingCardItem item={item} key={index} handleShoppingCardItemDelete={handleShoppingCardItemDelete}/>
            })}
        </div>
    </div>
  )
}
