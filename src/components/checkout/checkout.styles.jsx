import styled from "styled-components";

export const CheckoutSector = styled.div`
  padding: 9rem 3rem 0;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2f4f4f;
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  position: fixed;
  height: 3.1rem;
  background-color: rgba(210, 210, 210, 0.45);
  backdrop-filter: blur(3px);
  padding: 0 2rem;
  top: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgba(85, 96, 108, 0.84);
  list-style: none;
  font-size: 1.2rem;
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 1280px) {
    top: 7rem;
  }

  @media (max-width: 768px) {
    top: 6rem;
    font-size: .8rem;
  }


`;
export const CheckoutBody = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    margin-top: 0;
  }

`;
export const TotalPrice = styled.span`
  padding: 20px 0;
  font-size: 26px;
`;
export const PriceAmount = styled.span`
  font-size: 36px;
  font-weight: bold;
  
`;

export const EmptySpaceElement = styled.div`
  padding: 5rem;
  font-size: 3rem;
  color: rgba(47, 79, 79, 0.11);
  filter: blur(1px);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;