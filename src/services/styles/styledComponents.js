import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: #475467;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  &.active {
    font-size: 24px;
    color: #e44848;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
