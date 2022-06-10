import React from 'react'

import ShoppingCardItem from './ShoppingCardItem'

export default function ShoppingCard({shoppingCardItems}) {

  return (
    <div className='wrapper__shopping-card'>
        <p>Shopping card</p>
        <div className='wrapper__shoping-card-items'>
            {shoppingCardItems.map((item, index) => {
                if (index > 2) return;
                return <ShoppingCardItem item={item} key={index}/>
            })}
        </div>
    </div>
  )
}
