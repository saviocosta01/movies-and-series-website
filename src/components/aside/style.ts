import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background-color: #161d2f;

  .logo-svg {
    margin-left: 20px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;

    .tegged-movies-img {
      margin-top: 3px;
      cursor: pointer;
    }
    .home-svg {
      cursor: pointer;
    }
    .movie-svg{
      cursor: pointer;
    }
    .serie-svg{
        cursor: pointer;
    }
  }

  @media (min-width: 800px) {
    flex-direction: column;
    height: 90vh;
    margin-left: 20px;
    margin-top: 10px;
    width: 80px;
    border-radius: 15px;
    padding: 10px 0;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      margin-left: 10px;
      margin-bottom: 250px;
    }
    img {
      margin: 0;
      margin-bottom: 20px;
    }
    .logo-svg {
      margin: 0;
      margin-top: 20px;
    }
    .tegged-movies-img {
      margin-left: 5px;
    }
  }
`;
