import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export default Loader;
