import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImgLogo from '../../assets/images/Logo.png';

export const Container = styled.View`
   display: flex;
   height: 80px;
   background: black;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
`;

export const LogoButton = styled.TouchableOpacity`
   padding: 5px;
`;

export const Logo = styled.Image.attrs({
   source: ImgLogo,
   resizeMode: 'stretch',
})`
   max-width: 200px;
   max-height: 30px;
   margin: 0 10px;
`;

export const CartContainer = styled.Button``;

export const Icone = styled(Icon).attrs({
   name: 'shopping-basket',
   size: 35,
})`
   color: #fff;
   margin: 0 30px;
`;

export const Dot = styled.Text`
   position: absolute;
   text-align: center;
   top: -4px;
   right: 25px;
   min-width: 18px;
   min-height: 18px;
   background: green;
   color: #fff;
   font-size: 12px;
   padding: 2px;
   border-radius: 9px;
   overflow: hidden;
`;
