import styled from "styled-components";

export const CheckoutItemsContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: .5rem 0;
  font-size: 1.5rem;
  align-items: center;
  text-transform: uppercase;
  
  & > * {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: .6rem;
    padding: .1rem 0;
  }
`;

export const ImageContainer = styled.div`
  width: 10%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const QuantityHandlerContainer = styled.div`
  display: flex;

  & > div {
    font-size: 1rem;
    cursor: pointer;
    
    &:first-child {
      margin-right: .3rem;
    }
    &:last-child {
      margin-left: .3rem;
    }
  }
`;