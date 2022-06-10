import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import './css/index.css'

import React, {useState} from "react";

import ShoppingCard from "./ShoppingCard";
import TestShop from "./TestShop";

export function HomePage() {

  console.log('render');

  const bicycleRed = {
      name: 'bicycle',
      color: 'red',
      image: undefined,
      weight: 2,
      price: 600
  }

  const bicycleBlue = {
    name: 'bicycle',
    color: 'blue',
    weight: '3',
    price: '400',
    image: 'https://images.freeimages.com/images/small-previews/e3d/mountain-bike-1450482.jpg',
    imgWidth: '403.99px',
    imgHeight: '238.99px'
  }

  const gloves = {
      name: 'glove',
      color: 'black',
      image: undefined,
      weight: 0.2,
      price: 20
  }
  const tShirt = {
      name: 'tShirt',
      color: 'white',
      image: undefined,
      weight: 0.1,
      price: 100
  }

  const shoppingCardItems = []
  
  const [shoppingCardItemsArr, setShoppingCardItems] = useState(shoppingCardItems)

  function handleAddItemToCard() {
    setShoppingCardItems([...shoppingCardItemsArr, bicycleBlue])
  }

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <TestShop bicycleBlue={bicycleBlue} handleAddItemToCard={handleAddItemToCard}/>
        </Layout.Section>
        <Layout.Section secondary>
          <ShoppingCard shoppingCardItems={shoppingCardItemsArr}/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
