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
         const response = await api.get('/products').catch(err => {
            throw new Error(
               'Não foi possivel Realizar a consulta dos produtos'
            );
         });

         this.setState({
            products: response.data,
            isLoading: false,
         });
      } catch (e) {
         this.setState({
            error: {
               err: true,
               message: e.message,
            },
         });
      }
   };

   render() {
      const { addToCartSuccess } = this.props;
      const {
         products,
         isLoading,
         error: { err, message },
      } = this.state;

      console.tron.log(message);

      if (err) {
         return (
            <Container>
               <Error>
                  <IconError />
                  <TextError>Erro..</TextError>
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
                           {item.price}
                        </Texto>
                        <MainButton
                           style={Shadow}
                           onPress={() => {
                              addToCartSuccess(item);
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

const mapDispatchToProps = dispatch =>
   bindActionCreators(CartActions, dispatch);

export default connect(null, CartActions)(Home);

Home.propTypes = {
   navigation: PropTypes.shape({
      navigate: PropTypes.func,
   }).isRequired,
};
