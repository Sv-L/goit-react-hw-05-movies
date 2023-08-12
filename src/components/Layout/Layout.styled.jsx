import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px 0;
`;

export const Link = styled(NavLink)`
  padding: 20px;
  text-transform: uppercase;
  font-weight: 700;
  transform: scale(1);
  color: #6d90a8;

  &:hover {
    color: #d4e0e9;
  }

  &.active {
    transform: scale(1.3);
    color: #fff;
  }
`;
