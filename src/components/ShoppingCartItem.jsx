import React, {useContext} from 'react'
import { ShopContext } from './Home'

export default function ShoppingCartItem({item}) {

  const { actions } = useContext(ShopContext);

  return (
    <div className='shopping-cart__item' key={item.id}>
        <div className='shopping-cart__item-name'>{item.name}</div>
        <img src={item.image}/>
        <div className='shopping-cart__item-price'>Price: {item.price}$</div>
        <button 
          className='btn shopping-cart__item-btn-delete' 
          onClick={() => actions.handleShoppingCartItemDelete(item.id)}
          >&times;
        </button>
    </div>
  )
}
