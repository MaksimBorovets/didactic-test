import styled from 'styled-components';

export const Container = styled.body`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const SignInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const Logo = styled.img`
  width: 350px;
  height: 350px;
`;

export const LinkTo = styled.a`
  color: #5b95fe;
  text-decoration: underline;
`;

export const InputEmail = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  width: 100%;
  transition: border-color 0.3s ease;
  margin-top: 10px;

  &::placeholder {
    text-align: center;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SignInBtn = styled.button<{ disabled: boolean }>`
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  width: 150px;
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => (props.disabled ? 'white' : 'black')};
  background-color: 'white';
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : '#0056b3')};
    border-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')};
    color: white;
  }
`;
