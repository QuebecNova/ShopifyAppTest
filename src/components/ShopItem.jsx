import React from 'react'

export default function ShopItem(props) {
  const {
    StoreItems,
    handleAddItemToCard
  } = props

    return (
      StoreItems.map((item)=> (
        <div className='wrapper__test-shop-item' key={item.id}>
          <div className='test-shop-item'>
            <p>{item.name}</p>
              <img
                src={item.image} 
                className='shop-item__img' 
                width={item.imgWidth}  
                height={item.imgHeight} 
                />
          </div>
          <button 
            className='btn test-shop-add-to-card-button'
            onClick={() => handleAddItemToCard(item.id)}>
              Add to shopping card
          </button>
        </div>
    ))
  )
}
