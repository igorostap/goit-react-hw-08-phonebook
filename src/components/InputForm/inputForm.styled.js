import styled from 'styled-components';
import { Field } from 'formik';

export const InputFormBox = styled.div`
  margin: auto;
  padding: 20px;
  background: LawnGreen;
  border: 1px solid black;
  border-radius: 5px;
`;
export const InputItem = styled(Field)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
