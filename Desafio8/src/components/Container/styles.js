import styled from 'styled-components/native';
import image from '../../assets/images/Path.png';

export const Container = styled.ImageBackground.attrs({
   source: image,
})`
   height: 100%;
   width: 100%;
   color: white;
   background-color: black;
   margin: 0;
   padding: 20px 0;
`;
