import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 70px;
  margin-top: 20px;
  font-family: "Inter", sans-serif;
  overflow: hidden;

  img {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 800px) {
    margin-top: 50px;
  }

`;

export const RegisterContainer = styled.section`
  width: 70%;
  height: 60vh;
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  background-color: #161d2f;
  border-radius: 15px;
  padding: 20px;
  gap: 70px;

  .page-register {
    color: #b43a40;
    cursor: pointer;
    text-decoration: none;
  }
  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin-left: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 14px;
      margin-right: 2%;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #fc4747;
      }
    }
  }

  @media (min-width: 800px) {
    width: 30%;
    height: 45vh;

    h2 {
      font-size: 1.7rem;
    }
  }
`;

export const FormContent = styled.form`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  input {
    border: transparent;
    background-color: transparent;
    border-bottom: 1px solid #525f83;
    outline: none;
    color: #fff;
    height: 40px;
    width: 90%;
    margin: 0;

  }

  button {
    width: 100%;
    min-height: 46px;
    border-radius: 8px;
    border: 1px solid #fc4747;
    color: #fff;
    background-color: #fc4747;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  }

  button:hover{
    background-color: #fff;
    border:  1px solid #fff;
    color: #000;
  }
`;
