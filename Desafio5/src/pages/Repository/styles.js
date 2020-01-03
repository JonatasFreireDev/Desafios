import styled from 'styled-components';

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: grey;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: grey;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  padding: 5px;
  margin: 10px 5px;
  color: black;
  border-radius: 3px;
  border: 1px solid black;
  transition: all 0.5s;

  &:hover {
    color: white;
    border: 1px solid grey;
    background: grey;
  }

  &.active {
    background: grey;
    color: white;
    border: 1px solid grey;
  }
`;

export const ConfigIssue = styled.div`
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const deuErro = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
