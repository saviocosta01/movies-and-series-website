import styled from "styled-components";

export const CardRecommendeds = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 47%;
  min-height: 25vh;
  gap: 5px;
  position: relative;

  
  div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    color: #ccced2;
    font-size: 12px;

    p {
      margin: 0;
    }

    .image-category-card {
      display: flex;
      align-items: center;
      gap: 5px;

      .imgsvg-category-card {
        width: 20px;
        margin-top: 8px;
      }
      .image-serie-svg {
        width: 20px;
        margin-top: 5px;
      }
    }
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  h2 {
    margin: 0;
  }

  .image-group {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    width: 280px;
    min-height: 25vh;
    gap: 0;

    div {
      font-size: 14px;
    }
  }
`;
