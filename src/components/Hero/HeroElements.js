import styled from "styled-components";
import ImgBg from "../../images/img-2.jpg";

export const HeroContainer=styled.div`

background:linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.1)),url(${ImgBg});
width:100%;
background-position:center;
background-size:cover;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;

export const HeroWrapper=styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h1{

color:#fff;
font-size:3.5rem;
text-align:center;

}

`;

export const btnContainer=styled.div`

display:flex;
justify-content:center;
align-items:center;
text-align:center;

`;