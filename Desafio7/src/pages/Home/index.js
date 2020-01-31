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

export default class Home extends Component {
   state = {
      teste: true,
   };

   render() {
      const { navigation } = this.props;

      return (
         <Container>
            <List
               data={data.products}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => (
                  <ContItem>
                     <Img source={{ uri: item.image }} />
                     <Texto>{item.title}</Texto>
                     <Texto style={{ fontWeight: 'bold' }}>{item.price}</Texto>
                     <MainButton
                        style={Shadow}
                        onPress={() => {
                           navigation.navigate('Cart');
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
         </Container>
      );
   }
}

const data = {
   stock: [
      {
         id: 1,
         amount: 3,
      },
      {
         id: 2,
         amount: 5,
      },
      {
         id: 3,
         amount: 2,
      },
      {
         id: 4,
         amount: 1,
      },
      {
         id: 5,
         amount: 5,
      },
      {
         id: 6,
         amount: 10,
      },
   ],
   products: [
      {
         id: 1,
         title: 'Tênis de Caminhada Leve Confortável',
         price: 179.9,
         image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
         id: 2,
         title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
         price: 139.9,
         image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
         id: 3,
         title: 'Tênis Adidas Duramo Lite 2.0',
         price: 219.9,
         image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
         id: 5,
         title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
         price: 139.9,
         image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
         id: 6,
         title: 'Tênis Adidas Duramo Lite 2.0',
         price: 219.9,
         image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
         id: 4,
         title: 'Tênis de Caminhada Leve Confortável',
         price: 179.9,
         image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
   ],
};
