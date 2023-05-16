import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: #10141E;
    overflow-x: hidden;
}
.list-trending::-webkit-scrollbar {
  height:8px;
}
.list-trending::-webkit-scrollbar-track {
  background: #10141E;
}
.list-trending::-webkit-scrollbar-thumb {
  background: #161d2f;
}

p{
    margin: 0;
}
h2{
    margin: 0;
}
h3{
    margin: 0;
}

.h2-search{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 20px;
}

.card-trending{

  .div-play{
    opacity: 0;
    position: absolute;
  }
}

.card-trending:hover{

  .card-trending-content{
    bottom: 10px;
  }

  .div-play{
      background-color: rgba(0,0,0,0.6);
      width: 100%;
      height: 100%;
      opacity: 1;
      top: 0;
    div{
      
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 10px;
      cursor: pointer;
    }
  }
  .image-play-svg{
    height: 35px;
  }
}

.card-container{

  .div-play-cards{
    opacity: 0;
    position: absolute;
  }
}

.card-container:hover{

  .div-play-cards{
      background-color: rgba(0,0,0,0.6);
      width: 100%;
      height: 25vh;
      opacity: 1;
      top: 0;
    div{
      
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 10px;
      cursor: pointer;
    }
  }
  .image-play-svg{
    height: 35px;
    
  }
}


.image-card{
    height: auto;
    border-radius: 8px;
    width: 100%;

    @media(min-width: 800px){
      height: 25vh;
    }
  }


`;
