import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Logo, Icone, LogoButton, Dot } from './styles';

function Header({ navigation, CartLength }) {
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

const mapStateToProps = state => ({
   CartLength: state.cart.length,
});

export default connect(mapStateToProps)(Header);
