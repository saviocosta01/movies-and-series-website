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
  width: 90%;
  margin-top: 15px;
  gap: 20px;

  .h2-series {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const ListSeries = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;

  @media (min-width: 800px) {
    gap: 35px;
  }
`;

