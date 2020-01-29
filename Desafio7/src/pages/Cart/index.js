import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Cart extends Component {
   state = {
      teste: true,
   };

   static navigationOptions = {
      title: 'Cart',
   };

   render() {
      return (
         <View>
            <Text>Cart</Text>
         </View>
      );
   }
}
