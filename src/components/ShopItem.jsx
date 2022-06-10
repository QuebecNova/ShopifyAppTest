import React from 'react'

export default function ShopItem(props) {
  const {
    bicycleBlue,
    handleAddItemToCard
  } = props
  
    return (
    <div className='wrapper__test-shop-item'>
      <div className='test-shop-item'>
        <p>New Blue Bicycle</p>
          <img
            src={bicycleBlue.image} 
            className='shop-item__img' 
            width={bicycleBlue.imgWidth}  
            height={bicycleBlue.imgHeight} 
          />
      </div>
        <button 
          className='btn test-shop-add-to-card-button'
          onClick={handleAddItemToCard}>
            Add to shopping card
        </button>
    </div>
  )
}
