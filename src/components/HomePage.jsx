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

import trophyImgUrl from "../assets/home-trophy.png";

import './index.css'

import { ProductsCard } from "./ProductsCard";

import Squares from './Squares';

export function HomePage() {

  console.log('render');
  
  const squares = [
    'whiteSquare',
    'blackSquare'
  ]

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
            <div className='wrapper'>
              <Squares squares={squares}/>
            </div>  
        </Layout.Section>
        <Layout.Section secondary>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
