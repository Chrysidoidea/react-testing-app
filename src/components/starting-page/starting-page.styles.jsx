import styled from "styled-components";

export const StartingWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(227, 227, 227, 0.95);
  display: grid;
  place-content: center;
`;

export const StartingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  max-width: 900px;

  & > span {
    line-height: 1.6;
    font-size: 1.2rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    filter: blur(.5px);
    color: #7e7e7e;

    @media (max-width: 768px) {
      font-size: .9rem;
    }
  }

  & > h1 {
    color: #6c6c6c;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;