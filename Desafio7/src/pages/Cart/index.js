import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../../components/Container/styles';
import {
   View,
   CartView,
   Button,
   Products,
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
   IconEmpty,
   ContainerEmpty,
} from './styles';
import * as CartActions from '../../store/Modules/Cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ products, removeFromCart, total, updateAmountRequest }) {
   function increment(product) {
      updateAmountRequest(product.id, product.amount + 1);
   }

   function decrement(product) {
      updateAmountRequest(product.id, product.amount - 1);
   }

   return (
      <Container>
         <CartView>
            {products.length >= 1 ? (
               <>
                  <Products
                     data={products}
                     keyExtractor={item => item.id.toString()}
                     renderItem={({ item }) => (
                        <>
                           <Product>
                              <ProductImage
                                 source={{
                                    uri: item.image,
                                 }}
                              />
                              <ProductDescription>
                                 <ProductName>{item.title}</ProductName>
                                 <ProductPrice>
                                    {item.formatedValue}
                                 </ProductPrice>
                              </ProductDescription>
                              <Button onPress={() => removeFromCart(item.id)}>
                                 <ProductTrash />
                              </Button>
                           </Product>
                           <ProductConf>
                              <View>
                                 <Button onPress={() => decrement(item)}>
                                    <ProductLess />
                                 </Button>
                                 <ProductItens>{item.amount}</ProductItens>
                                 <Button onPress={() => increment(item)}>
                                    <ProductMore />
                                 </Button>
                              </View>
                              <View>
                                 <ProductPrice>{item.subtotal}</ProductPrice>
                              </View>
                           </ProductConf>
                        </>
                     )}
                  />

                  <Total>
                     <Text>TOTAL</Text>
                     <ProductPrice>{total}</ProductPrice>
                  </Total>
                  <CheckoutButton>
                     <TextButton>FINALIZAR PEDIDO</TextButton>
                  </CheckoutButton>
               </>
            ) : (
               <ContainerEmpty>
                  <IconEmpty />
                  <Text style={{ fontSize: 20 }}>Carrinho Vazio</Text>
               </ContainerEmpty>
            )}
         </CartView>
      </Container>
   );
}

const mapStateToProps = state => ({
   products: state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
   })),
   total: formatPrice(
      state.cart.reduce((total, product) => {
         return total + product.price * product.amount;
      }, 0)
   ),
});

const mapDispatchToProps = dispatch =>
   bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, CartActions)(Cart);
