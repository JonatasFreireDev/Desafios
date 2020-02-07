import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as CartActions from '../../store/Modules/Cart/actions';
import { Container } from '../../components/Container/styles';
import {
   Error,
   TextError,
   IconError,
   ViewLoading,
   View,
   List,
   ContItem,
   Texto,
   Img,
   Icone,
   MainButton,
   Shadow,
   White,
} from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default function Home() {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState({ err: false, message: '' });

   const amount = useSelector(state => {
      state.cart.reduce((sumAmount, product) => {
         sumAmount[product.id] = product.amount;
         return sumAmount;
      }, {});
   });

   const dispatch = useDispatch();

   useEffect(() => {
      async function loadProducts() {
         setIsLoading(true);

         try {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
               ...product,
               formatedValue: formatPrice(product.price),
            }));

            setProducts(data);
            setIsLoading(false);
         } catch (e) {
            console.tron.log(e);
            setError({ err: true, message: e.message });
         }
      }

      loadProducts();
   }, []);

   function renderError() {
      return (
         <Container>
            <Error>
               <IconError />
               <TextError>{error.message}</TextError>
            </Error>
         </Container>
      );
   }

   function renderLoading() {
      return (
         <Container>
            <ViewLoading>
               <ActivityIndicator color="#FFF" size={50} />
            </ViewLoading>
         </Container>
      );
   }

   function renderList() {
      return (
         <Container>
            <List
               data={products}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <ContItem>
                     <Img source={{ uri: item.image }} />
                     <Texto>{item.title}</Texto>
                     <Texto style={{ fontWeight: 'bold' }}>
                        {item.formatedValue}
                     </Texto>
                     <MainButton
                        style={Shadow}
                        onPress={() => {
                           dispatch(CartActions.addToCartRequest(item.id));
                        }}
                     >
                        <View style={{ fontWeight: 'bold', color: '#fff' }}>
                           <Icone />
                           <Texto style={White}>{amount[item.id] || 0}</Texto>
                        </View>
                        <Texto style={White}>ADICIONAR</Texto>
                     </MainButton>
                  </ContItem>
               )}
            />
         </Container>
      );
   }

   if (error.err) {
      return renderError();
   }

   if (isLoading) {
      return renderLoading();
   }

   if (!error.err && !isLoading) {
      return renderList();
   }
}

Home.propTypes = {
   addToCartRequest: PropTypes.func.isRequired,
};
