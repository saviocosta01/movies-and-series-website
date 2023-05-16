import styled from "styled-components";

export const CardTrending = styled.li`
  list-style: none;
  min-width: 70%;
  height: 25vh;
  border-radius: 8px;
  position: relative;



  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: relative;
  }

  .image-group {
    object-fit: cover;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    min-width: 30%;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  .div-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2 {
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      color: #ccced2;
      font-size: 14px;

      p {
        margin: 0;
      }

      .image-movie-card {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .image-category-card {
        display: flex;
        align-items: center;
        gap: 10px;

        .imgsvg-category-card {
          width: 20px;
          margin-top: 8px;
        }
      }

      svg.test-img {
        width: 33px;
      }
    }
  }

  h3 {
    color: #ccced2;
    font-size: 14px;
    font-weight: 400;
  }
`;
