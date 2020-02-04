import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
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
         const response = await api.get('/products');

         const data = response.data.map(product => ({
            ...product,
            formatedValue: formatPrice(product.price),
         }));

         this.setState({
            products: data,
            isLoading: false,
         });
      } catch (e) {
         console.tron.log(e);
         this.setState({
            error: {
               err: true,
               message: e.message,
            },
         });
      }
   };

   render() {
      const { addToCartRequest, amount } = this.props;
      const {
         products,
         isLoading,
         error: { err, message },
      } = this.state;

      if (err) {
         return (
            <Container>
               <Error>
                  <IconError />
                  <TextError>{message}</TextError>
               </Error>
            </Container>
         );
      }

      return (
         <Container>
            {isLoading ? (
               <ViewLoading>
                  <ActivityIndicator color="#FFF" size={50} />
               </ViewLoading>
            ) : (
               <List
                  data={products}
                  keyExtractor={item => item.id.toString()}
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
                              console.tron.log(this.props);
                              addToCartRequest(item.id);
                           }}
                        >
                           <View style={{ fontWeight: 'bold', color: '#fff' }}>
                              <Icone />
                              <Texto style={White}>
                                 {amount[item.id] || 0}
                              </Texto>
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

const mapStateToProps = state => ({
   amount: state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
   }, {}),
});

const mapDispatchToProps = dispatch =>
   bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, CartActions)(Home);

Home.propTypes = {
   navigation: PropTypes.shape({
      navigate: PropTypes.func,
   }).isRequired,
};
