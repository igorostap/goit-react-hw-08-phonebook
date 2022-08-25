import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(NavLink)`
  padding: 5px 10px;
  margin-right: 20px;
  scale: 1.2;
  text-decoration: none;
  border: 1px solid blue;
  border-radius: 5px;
  :hover {
    background-color: aqua;
    cursor: pointer;
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: auto;
  margin-left: auto;
`;
