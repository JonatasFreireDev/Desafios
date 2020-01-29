import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Container, Logo, Icone, LogoButton, Dot } from './styles';

export default function Header({ navigation }) {
   return (
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
            {1 > 0 ? <Dot>3</Dot> : null}
         </TouchableOpacity>
      </Container>
   );
}

Header.propTypes = {
   navigation: PropTypes.shape({
      navigate: PropTypes.func,
   }).isRequired,
};
