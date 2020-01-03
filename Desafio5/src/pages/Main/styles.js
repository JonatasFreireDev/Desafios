import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    transition: all 0.4s;
    flex: 1;
    border: 1px solid #eee;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 4px;

    &:focus {
      border: 1px solid grey;
    }
  }

  ${props =>
    props.error &&
    css`
      input {
        border: 1px solid red;
        box-shadow: 0px 0px 10px -2px rgba(255, 0, 0, 1);
        color: red;
      }
    `}
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

export const SubimitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    transition: all 0.3s;

    &:hover {
      background: #dbdbdb;
      border-radius: 20px;
    }

    img {
      width: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: grey;
      text-decoration: none;
    }

    div {
      display: flex;
      margin: 0 10px;
      align-items: center;
      svg {
        transition: all 0.5s;
        margin: 0 10px;
        height: 18px;
        width: 18px;
        &.delete:hover {
          color: red;
        }
        &.next:hover {
          color: green;
          transform: scale(1.3);
        }
      }
    }
  }
`;
