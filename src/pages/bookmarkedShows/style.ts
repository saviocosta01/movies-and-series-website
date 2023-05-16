import styled from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin: 0;
  margin-top: 15px;
  gap: 20px;

 .h2-movies{
    font-size: 1.2rem;
    font-weight: 400;
  }
  .h2-series{
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 20px;
  }
`;

export const ListTaggedMovies = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px 15px;
  width: 100%;

  @media(min-width: 800px){
    gap: 35px;
  }
`;

