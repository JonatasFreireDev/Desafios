import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Logo, Icone, LogoButton, Dot } from './styles';

export default function Header({ navigation }) {
   const CartLength = useSelector(state => state.cart.length);

   return (
      <SafeAreaView>
         <Container>
            <LogoButton
               onPress={() => {
                  navigation.navigate('Home');
               }}
            >
               <Logo />
            </LogoButton>

            <TouchableOpacity
               onPress={() => {
                  navigation.navigate('Cart');
               }}
            >
               <Icone />
               {CartLength > 0 ? <Dot>{CartLength}</Dot> : null}
            </TouchableOpacity>
         </Container>
      </SafeAreaView>
   );
}

Header.propTypes = {
   navigation: PropTypes.shape({
      navigate: PropTypes.func,
   }).isRequired,
};
