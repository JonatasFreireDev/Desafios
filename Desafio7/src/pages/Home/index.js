import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

// import { Container } from './styles';

export default class Home extends Component {
   state = {
      teste: true,
   };

   // static navigationOptions = {
   //    title: 'Homeee',
   // };

   render() {
      return (
         <View>
            <Text>
               <Icon name="rocket" size={30} color="#900" />
               Home aeeaewew
            </Text>
         </View>
      );
   }
}
