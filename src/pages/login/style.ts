import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  margin-top: 20px;
  font-family: "Inter", sans-serif;
  
  img {
    width: 30px;
    height: 30px;
  }

 

  @media (min-width: 800px) {
    margin-top: 50px;   
  }

 
`;

export const LoginContainer = styled.section`
  width: 70%;
  height: 50vh;
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  background-color: #161d2f;
  border-radius: 10px;
  padding: 20px;
  gap: 50px;

  .page-register {
    color: #b43a40;
    cursor: pointer;
    text-decoration: none;
  }
  h2{
    font-weight: 400;
    font-size: 1.5rem;
    margin-left: 20px;
  }

  div{
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
      }
  }

  @media (min-width: 800px) {
    width: 30%;
    height: 45vh;

    h2{
        font-size: 1.7rem;
    }
  }

`;

export const LoginContent = styled.form`
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
    border-bottom: 1px solid #525F83;
    outline: none;
    color: #fff;
    height: 30px;
    width: 90%;
 
  }

  button {
    width: 100%;
    min-height: 46px;
    border-radius: 8px;
    border: 1px solid #FC4747;
    color: #fff;
    background-color: #FC4747;
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
