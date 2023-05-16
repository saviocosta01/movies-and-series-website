import styled from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Inter", sans-serif;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const SectionContent = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  gap: 20px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .h2-trending{
      font-size: 1.2rem;
      font-weight: 400;
    }
    .h2-recomendeds{
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

export const ListTrending = styled.ul`
  display: flex;
  width: 100%;
  height: 28vh;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 30px;

`;

export const ListRecommendeds = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media (min-width: 800px) {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 35px;
  }
`;

export const ListMoviesSearch = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 15px ;

  @media(min-width: 800px){
    gap: 35px;
  }
`;

export const CardMoviesSearch = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 30vh;
  gap: 8px;
  position: relative;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      margin: 0;
    }

    .image-category-card {
      display: flex;
      align-items: center;

      .imgsvg-category-card {
        width: 25px;
      }
    }
  }

  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
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
  }
`;
