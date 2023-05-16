import styled from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  width: 90%;
  margin-top: 15px;
  gap: 20px;

  .h2-movies{
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const ListMovies = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;

  justify-content: flex-start;

  @media(min-width: 800px){
    gap: 35px;
  }
`;
