import styled from 'styled-components';
import { darken } from 'polished';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import { RectButton } from 'react-native-gesture-handler';

export const Error = styled.View`
   height: 100%;
   justify-content: center;
   align-items: center;
`;

export const TextError = styled.Text`
   font-size: 16px;
   color: white;
   padding: 8px;
   margin: 0 50px;
`;

export const IconError = styled(Icon).attrs({
   name: 'block',
   size: 100,
   color: '#FFF',
})``;

export const ViewLoading = styled.View`
   height: 100%;
   justify-content: center;
   align-items: center;
`;

export const View = styled.View`
   margin: 0;
   padding: 10px 20px;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
   flex-direction: row;
   background: ${darken(0.2, '#7159c1')};
`;

export const List = styled(Carousel).attrs({
   showsVerticalScrollIndicator: false,
   horizontal: true,
   sliderWidth: 410,
   itemWidth: 300,
})``;

export const ContItem = styled.View`
   background: #fff;
   padding: 10px;
   border-radius: 10px;
   margin: 0 10px;
   height: 390px;
   width: 280px;
`;

export const Img = styled.Image`
   width: 100%;
   height: 200px;
`;

export const Texto = styled.Text`
   font-size: 18px;
   margin: auto;
`;

export const MainButton = styled(RectButton)`
   align-items: center;
   flex-direction: row;
   background: #7159c1;
   border-radius: 5px;
`;

export const Icone = styled(Icon).attrs({
   name: 'add-shopping-cart',
   size: 20,
})`
   margin-right: 5px;
   color: white;
`;

export const Shadow = {
   shadowColor: '#000',
   shadowOffset: {
      width: 0,
      height: 3,
   },
   shadowOpacity: 0.29,
   shadowRadius: 4.65,
   elevation: 7,
};

export const White = {
   color: 'white',
};
