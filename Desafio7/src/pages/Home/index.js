import React, { Component } from 'react';
import { Container } from '../../components/Container/styles';
import {
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

import api from '../../services/api';

export default class Home extends Component {
   state = {
      products: [],
      isLoading: false,
      error: {
         err: false,
         message: '',
      },
   };

   componentDidMount() {
      this.loadProducts();
   }

   loadProducts = async () => {
      this.setState({ isLoading: true });

      try {
         const response = await api.get('/products/').catch(err => {
            this.setState({
               error: {
                  err: true,
                  message: err.message,
               },
            });
         });

         this.setState({
            products: response.data,
            isLoading: false,
         });
      } catch (err) {}
   };

   render() {
      const { navigation } = this.props;
      const { products, isLoading, error: err } = this.state;

      return (
         <Container>
            {isLoading ? (
               <>
                  <Texto>Carregando..</Texto>
               </>
            ) : (
               <List
                  data={products}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                     <ContItem>
                        <Img source={{ uri: item.image }} />
                        <Texto>{item.title}</Texto>
                        <Texto style={{ fontWeight: 'bold' }}>
                           {item.price}
                        </Texto>
                        <MainButton
                           style={Shadow}
                           onPress={() => {
                              this.loadProducts();
                              navigation.navigate('Cart', { item });
                           }}
                        >
                           <View style={{ fontWeight: 'bold', color: '#fff' }}>
                              <Icone />
                              <Texto style={White}>2</Texto>
                           </View>
                           <Texto style={White}>ADICIONAR</Texto>
                        </MainButton>
                     </ContItem>
                  )}
               />
            )}
         </Container>
      );
   }
}
