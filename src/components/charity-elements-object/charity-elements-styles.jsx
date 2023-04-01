import styled from 'styled-components';

export const CategoriesSector = styled.div`
  background-color: #f8f8f8;
  padding: 9rem 1.2rem 1.2rem 1.2rem;
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1747px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding-top: 8.2rem;
  }

  @media (max-width: 768px) {
    padding-top: 7.2rem;
  }
`;
export const CategoryContainer = styled.div`
  background-color: rgba(253, 253, 253, 0.25);
  border-radius: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0.90;
  height: 30rem;
  transition: 0.2s;
  transform-origin: center;
  box-shadow: rgba(38, 38, 38, 0.8) 0 4px 16px, rgb(218, 218, 218) 0 8px 32px;

  &:hover {
    opacity: 1;
    transform: scale(0.99);
    box-shadow: rgba(38, 38, 38, 0.8) 0 2px 4px, rgb(218, 218, 218) 0 4px 16px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
  }

  @media (max-width: 768px) {
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const CategoryBodyContainer = styled.div`
  position: absolute;
  width: 50rem;
  background: rgba(255, 255, 255, 0.2);
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  transition: 0.2s;
  border-radius: .6rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  backdrop-filter: blur(5px) brightness(65%);

  & > h2 {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 877px) {
    width: 20rem;

    & > h2 {
      font-size: 1.1rem;
    }
    
  }
`;
export const EntranceLogoLink = styled.a`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.68);
  
  @media (max-width: 768px) {
      font-size: .8rem;
    }
`;
export const EntranceLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;


export const EntranceLogoImage = styled.a`
  min-height: 8.75rem;
  max-height: 9.375rem;
  min-width: 12.5rem;
  max-width: 13.125rem;
  background: center / cover ${({ logoURL }) => `url(${logoURL})`};
  filter: grayscale(0.8);
  border: .5rem solid rgba(206, 210, 206, 0.77);
  border-radius: .2rem;
  opacity: .8;
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 877px) {
    display: none;
  }

  &:hover {
    filter: grayscale(0.15);
    
    &:after {
      left: 135%;
    }
  }

  &:after {
    content: "";
    position: absolute;
    background: #ffffff;
    left: -120px;
    top: -70px;
    width: 60px;
    height: 260px;
    opacity: .6;
    transform: rotate(35deg);
    transition: all 1550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

/*

// .categories-container {
//   background-color: #ffffff;
//   padding: 10rem 1.5rem 5rem 1.5rem;
//   display: grid;
//   gap: 1.6rem;
//   grid-template-columns: repeat(2, 1fr);
//   height: 139rem;

  // .category-container {
  //   background-color: rgba(253, 253, 253, 0.25);
  //   border-radius: .2rem;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   overflow: hidden;
  //   box-shadow: rgba(38, 38, 38, 0.8) 0 4px 16px, rgb(218, 218, 218) 0 8px 32px;
  //   transition: 0.5s;
  //   opacity: 0.90;
  //   height: 40rem;

    &:hover {
      opacity: 1;
      scale: 0.99;
      box-shadow: rgba(38, 38, 38, 0.8) 0 2px 4px, rgb(218, 218, 218) 0 4px 16px;
    }

    .background-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;

    }
    .phone-media-href {
      cursor: pointer;
    }

    .category-body-container {
      background-color: rgba(201, 201, 201, 0.16);
      padding: .2rem;
      margin: 5rem;
      border-radius: .3rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      backdrop-filter: blur(10px) brightness(45%);
      width: 50rem;

    }
    .phone-media-href {
      text-decoration: none;
    }

    h2 {
      color: #ced2ce;
      align-self: center;
      cursor: default;
      user-select: none;
      font-size: 2.5rem;

    }

    p {
      color: #ced2ce;
      font-size: .9rem;
      align-self: center;
      cursor: default;
      margin: 1rem 3rem;
      user-select: none;
      max-width: 50rem;

    }

    .entrance-logo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

    }

    .logo-image {
      min-height: 8.75rem; max-height: 9.375rem;
      min-width: 12.5rem; max-width: 13.125rem;
      margin-right: 3rem;
      margin-bottom: 2rem;
      background-size: cover;
      background-position: center;
      filter: grayscale(0.80);
      border: .5rem solid rgba(206, 210, 206, 0.77);
      border-radius: .2rem;
      opacity: .8;
      transition: all 0.4s ease;
      overflow: hidden;

      &:hover {
        filter: grayscale(0.15);
      }

      &:after {
        background: #ffffff;
        content: "";
        height: 260px;
        left: -120px;
        opacity: .6;
        position: absolute;
        top: -70px;
        transform: rotate(35deg);
        transition: all 1550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 60px;
      }

      &:hover {
        cursor: pointer;
        &:after {
          left: 135%;
        }
      }
    }
  }
}

@media ( max-width: 480px) {

  .categories-container {
    grid-template-columns: repeat(1, 1fr);
    height: 150rem;
    padding-top: 13rem;

    .category-container {
      opacity: 1;
      height: 30rem;
      min-width: 272px;

      .category-body-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        h2 {
          text-align: center;
        }
      }
    }
    .entrance-logo {
      .phone-media-href {
        display: none;
      }
      .logo-image {
        margin: 0 0 2rem 0;
      }
    }
  }
}

@media (min-width:481px) and (max-width: 768px) {
  .categories-container {
    padding: 10rem 1.5rem 0 1.5rem;
    height: 120rem;
    grid-template-columns: repeat(1, 1fr);

    .category-container {
      opacity: 1;
      height: 23rem;
      min-width: 272px;

      .category-body-container {
        width: 350px;
        height: 20rem;
        margin: 0;
        align-items: center;
        justify-content: center;

        h2 {
          display: none;
        }
      }
    }
    .entrance-logo {
      .phone-media-href {
        display: none;
      }
      .logo-image {
        margin: 0;
      }
    }
  }
}


@media (min-width: 768px) and (max-width: 1280px) {
  .categories-container {
    grid-template-columns: repeat(1, 1fr);
    padding: 10rem 1.5rem 0 1.5rem;

    .category-container {
      opacity: 0.9;
      height: 40rem;
      min-width: 272px;
    }

    .entrance-logo {
      align-items: center;
    }
  }
}

* {
  font-family: 'Libre Baskerville', serif
}

*/