import styled from 'styled-components';

export const FormBox = styled.form`
  margin: 10px auto;
  padding: 20px;
  width: 240px;
  background-color: #85C1E9;
  border-radius: 5px;
  animation-name: opacity2;
  animation-duration: 1000ms;
  @keyframes opacity2 {
    0% {opacity: 0}
    100% {opacity: 1}
  }
}
`;
export const Input = styled.input`
  display: flex;
  justyfy-content: space-between;
`;
export const Head = styled.h1`
  margin: 10px auto;
  width: 380px;
`;
