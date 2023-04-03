import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {ReactComponent as MerchIcon} from "../../assets/shopping-bag.svg";

export const NavigationContainer = styled.div`
  height: 13vh;
  width: 100%;
  box-shadow: 0 1px 15px black;
  overflow: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem;
  z-index: 10;
  background-color: rgba(248, 248, 248, 0.65);
  backdrop-filter: blur(5px);
  position: fixed;

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 7rem;
    padding: 2rem;
  }
  @media (max-width: 768px) {
    height: 6rem;
    padding: 1rem;
  }
`;
export const Logo = styled.div`
  width: 5rem;
  height: 5rem;
  
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 4.5rem;
    height: 4.5rem;
  }
  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const NavigationElements = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavigationLinksContainer = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  padding-left: 10px;
  padding-right: 10px;
`
export const StyledNavLink = styled(NavLink)`
  color: #55606c;
  transition: .5s;

  &.active {
 
    filter: hue-rotate(-20grad) saturate(40) brightness(.7) contrast(0.9);
`
export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-content: center;
  width: 2rem;
  height: 2rem;
`
export const Icon = styled(MerchIcon)`
  width: 2rem;
  height: 2rem;
`
export const IconCount = styled.span`
  position: absolute;
  font-size: .7rem;
  user-select: none;
  color: #55606c;
  bottom: .25rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
`
export const UserSettingsAndBagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`