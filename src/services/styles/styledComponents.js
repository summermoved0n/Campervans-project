import { NavLink, Link } from 'react-router-dom';
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

  @media screen and (min-width: 1342px) {
    font-size: 26px;
    &.active {
      font-size: 28px;
    }
  }
`;

export const TextLink = styled(Link)`
  color: #e44848;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;

export const FooterLink = styled(Link)`
  color: #f7f7f7;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;
