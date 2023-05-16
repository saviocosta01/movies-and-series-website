import styled from "styled-components";

export const CardMovie = styled.li`
  list-style: none;
  width: 48%;
  min-height: 30vh;
  gap: 15px;
  position: relative;
  

  .div-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;

      .image-movie-svg {
        display: flex;
        align-items: center;
      }
    }

    h2 {
      margin: 0;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    
  }

  .image-group {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
  }

  .image-group-white {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
  }
  .noneGroup {
    display: none;
  }


  @media(min-width: 800px){
        width: 300px;
    }
`;
