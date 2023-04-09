//merch-card-container
import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";


export const PhotoCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: stretch;
  border-radius: 0.3rem;
  padding: 0.8rem;
  background-color: rgb(248, 248, 248);
  box-shadow: rgba(0, 0, 0, 0.23) 0 8px 9px;
  transition: 0.2s;
  
  &:hover {
    scale: 0.995;
    box-shadow: rgba(0, 0, 0, 0.23) 0 3px 4px;
  }


  & > button {
    position: absolute;
    background-color: transparent;
    color: transparent;
    border: none;
    transition: 1s;
    border-radius: 10%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    &:hover {
      backdrop-filter: blur(1.5px);
      color: white;
    }
  }
`;
export const ImageWrapper = styled.div`
  width: calc(25vw - 0.8rem * 2 - 5px);
  height: auto;
  
  @media (min-width: 768px) and (max-width: 1280px) {
    width: calc(33vw - 0.8rem * 2);
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: calc(50vw - 0.8rem * 2);
  }
  @media (max-width: 481px) {
    width: calc(100vw - 0.8rem * 2);
`;
export const StyledLazyLoadImage = styled(LazyLoadImage)`
  width: 100%;

`;
export const PhotoCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 0.8rem * 2);
  left: 0;
  right: 0;
  bottom: 1rem;
  margin: 0 auto;
  height: 10vh;
  position: absolute;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  backdrop-filter: blur(1px);
  border-radius: 3px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.46), rgba(255, 255, 255, 0));

  & > span:last-child {
    font-size: 2rem;
  }
`;