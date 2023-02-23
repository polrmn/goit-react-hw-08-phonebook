import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  width: 96px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 4px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #651fff;
  }
  &.active {
    background-color: #fff;
    color: #651fff;
  }
`;