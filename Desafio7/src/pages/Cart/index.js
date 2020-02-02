import React, { Component } from 'react';

import { Container } from '../../components/Container/styles';
import {
   View,
   CartView,
   Button,
   Product,
   ProductImage,
   ProductDescription,
   ProductName,
   ProductPrice,
   ProductTrash,
   Total,
   ProductConf,
   ProductLess,
   ProductItens,
   ProductMore,
   Text,
   TextButton,
   CheckoutButton,
} from './styles';

export default class Cart extends Component {
   state = {
      listProducts: [],
   };

   componentDidMount() {
      const { listProducts } = this.state;
      const { item } = this.props.navigation.state.params;

      this.setState({ listProducts: [...listProducts, item] });
      console.tron.log(this.state);
      console.tron.log(item);
   }

   static navigationOptions = {
      title: 'Cart',
   };

   render() {
      return (
         <Container>
            <CartView>
               <>
                  <Product>
                     <ProductImage
                        source={{
                           uri:
                              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS9842RHuqv2efauljx_9OCXb4JKk9BzHFQrWfPohqzHyqtwj8',
                        }}
                     />
                     <ProductDescription>
                        <ProductName>aeeasdasdasdasdasdw</ProductName>
                        <ProductPrice>aeew</ProductPrice>
                     </ProductDescription>
                     <Button>
                        <ProductTrash />
                     </Button>
                  </Product>
                  <ProductConf>
                     <View>
                        <Button>
                           <ProductLess />
                        </Button>
                        <ProductItens>1</ProductItens>
                        <Button>
                           <ProductMore />
                        </Button>
                     </View>
                     <View>
                        <ProductPrice>6542</ProductPrice>
                     </View>
                  </ProductConf>
               </>
               <Total>
                  <Text>TOTAL</Text>
                  <ProductPrice>1619,19</ProductPrice>
               </Total>
               <CheckoutButton>
                  <TextButton>FINALIZAR PEDIDO</TextButton>
               </CheckoutButton>
            </CartView>
         </Container>
      );
   }
}
