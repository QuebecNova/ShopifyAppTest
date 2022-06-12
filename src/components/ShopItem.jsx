import React, {useContext} from 'react'
import { ShopContext } from './Home'
import StoreItems from '../data/products.js';

export default function ShopItem() {

  const { actions } = useContext(ShopContext)

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
                draggable
                onDragStart={(e) => actions.dragStart(e, item.id)}
                />
          </div>
          <button 
            className='btn test-shop-add-to-cart-button'
            onClick={() => actions.handleAddItemToCart(item.id)}
            >Add to shopping cart
          </button>
        </div>
    ))
  )
}
