import styled from "styled-components";


export const CardRecommendeds = styled.li`

list-style: none;
display: flex;
flex-direction: column;
width: 48%;
min-height: 30vh;
gap: 8px;
position: relative;

div{
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
    color: #CCCED2;
    font-size: 14px;
    

    p{
        margin: 0;
    }

    .image-category-card{
        display: flex;
        align-items: center;
        gap: 5px;

        .imgsvg-category-card{
            width: 20px;
            margin-top: 8px;
        }
    }
}


    h2{
        margin: 0;
        
    }

    .image-group{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    @media(min-width: 800px){
        width: 290px;
    }

`