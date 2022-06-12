import React, {useContext} from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { ShopContext } from './Home'

export default function ShoppingCart() {
    
    const { state, actions } = useContext(ShopContext)

    let overallPrice = 0;

    state.shoppingCartItems.forEach(item => {
        overallPrice += item.price;
    });

    function displayPrice() {
        if (!overallPrice) return;
        return <div className='shopping-cart__overall-price'>Price: {overallPrice}$</div>
    }

  return (
    <div 
        className='wrapper__shopping-cart' 
        onDragOver={(e) => actions.dragOver(e)} 
        onDrop={(e) => actions.dragDrop(e)}
    >
        <p>Shopping cart</p>
        <div className='wrapper__shoping-cart-items'>
            {state.shoppingCartItems.map((item, index) => (
                <ShoppingCartItem 
                    item={item} 
                    key={index}
                />
            ))}
        </div>
        {displayPrice()}
    </div>
  )
}
