import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as CartActions from '../../store/Modules/Cart/actions';
import { Container, Logo, Icone, LogoButton, Dot } from './styles';

function Header({ navigation, CartLength }) {
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
            {CartLength > 0 ? <Dot>{CartLength}</Dot> : null}
         </TouchableOpacity>
      </Container>
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

const mapDispatchToProps = dispatch =>
   bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, CartActions)(Header);
