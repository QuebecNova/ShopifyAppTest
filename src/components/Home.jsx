import React, {useState, createContext} from "react";
import { Page, Layout} from "@shopify/polaris";
import StoreItems from '../data/products.js';
import ShoppingCart from "./ShoppingCart";
import TestShop from "./TestShop";

export const ShopContext = createContext({ state: {}, actions: {} });

export default function EmptyStatePage() {
  
  const [shoppingCartItems, setShoppingCartItems] = useState([])

  const providerValue = {
    state: {
      shoppingCartItems
    },
    
    actions: {
      handleAddItemToCart(id) {
        const choosenItem = StoreItems.find(item => {
          if (item.id  === id) {
            return item;
          }
        })
        setShoppingCartItems([...shoppingCartItems, choosenItem])
      },
    
      handleShoppingCartItemDelete(id) {
        setShoppingCartItems(shoppingCartItems.filter(item => item.id !== id))
      },
    
      dragStart (e, id) {
        e.dataTransfer.setData('id', id)
      },
    
      dragOver (e) {
        e.preventDefault()
      },
    
      dragDrop (e) {
        e.target.classList.remove('item-dragged-over')
        const id = e.dataTransfer.getData('id')
        const choosenItem = StoreItems.find(item => {
          if (item.id  == id) {
            return item;
          }
        })
        setShoppingCartItems([...shoppingCartItems, choosenItem])
      }
    }
  }

  return (
    <ShopContext.Provider value={providerValue}>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <TestShop/>
          </Layout.Section>
          <Layout.Section secondary>
            <ShoppingCart/>
          </Layout.Section>
        </Layout>
      </Page>
    </ShopContext.Provider>
  );
}
