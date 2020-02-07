import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Products = styled.FlatList.attrs({
   showsVerticalScrollIndicator: false,
})`
   height: 77%;
`;

export const CartView = styled.View`
   background: white;
   border-radius: 5px;
   padding: 10px;
   margin: 0 20px;
`;

export const Product = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const ProductImage = styled.Image`
   width: 80px;
   height: 80px;
`;

export const ProductDescription = styled.View`
   width: 200px;
`;

export const ProductName = styled.Text``;

export const ProductPrice = styled.Text`
   font-size: 17px;
   margin-top: auto;
   font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const ProductTrash = styled(Icon).attrs({
   name: 'delete-forever',
   size: 30,
})`
   color: #7159c1;
`;

export const ProductConf = styled.View`
   flex-direction: row;
   margin-top: 10px;
   background: #e9e9e9;
   border-radius: 5px;
   justify-content: space-between;
   align-items: center;
`;

export const View = styled.View`
   padding: 8px;
   flex-direction: row;
   align-items: center;
`;

export const ProductLess = styled(Icon).attrs({
   name: 'remove-circle-outline',
   size: 25,
})`
   padding: 5px;
   color: #7159c1;
`;

export const ProductItens = styled.TextInput.attrs({
   keyboardType: 'numeric',
   maxLength: 2,
})`
   padding: 0px 10px;
   background: white;
   margin: 0 5px;
   width: 40px;
   height: 30px;
   border-radius: 5px;
`;

export const ProductMore = styled(Icon).attrs({
   name: 'control-point',
   size: 25,
})`
   padding: 5px;
   color: #7159c1;
`;

export const Total = styled.View`
   margin: 15px 0;
   align-items: center;
   justify-content: center;
`;

export const Text = styled.Text``;

export const TextButton = styled.Text`
   font-size: 16px;
   font-weight: bold;
   text-align: center;
   color: white;
`;

export const CheckoutButton = styled(RectButton)`
   width: 100%;
   color: #fff;
   padding: 18px;
   border-radius: 5px;
   text-align: center;
   background: #7159c1;
`;

export const IconEmpty = styled(Icon).attrs({
   name: 'add-shopping-cart',
   size: 100,
})`
   padding: 15px;
`;

export const ContainerEmpty = styled.View`
   justify-content: center;
   align-items: center;
   height: 100%;
`;
