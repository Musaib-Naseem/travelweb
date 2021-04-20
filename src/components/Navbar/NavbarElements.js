import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

export const NavContainer=styled.div`

background:#000;
height:90px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
position:sticky;
top:0;
z-index:999;

`;

export const NavContainerWrapper=styled.div`


display:flex;
width:1200px;
width:1500px;
max-width:1200px;
margin:0px 30px;
min-width:500px;
align-items:center;
height:80px;
justify-content:space-between;
background:#000;




`;


export const Logo =styled(Link)`

font-size:25px;
color:#fff;
text-decoration:none;
display:flex;
align-items:center;
justify-self: start;





`;


export const NavbarMenu=styled.div`

display:flex;
align-items:center;



@media screen and (max-width:768px){

display:none;

}
`;


export const NavbarLink=styled(Link)`

color:#fff;
text-decoration:none;
font-size:25px;
transition:0.3s ease-in-out;
cursor:pointer;
padding:0 13px;

&:hover{

color:green;
transition:0.3s ease-in-out;
cursor:pointer;

}

`;

export const MenuIcon=styled.div`


display:none;


@media screen and (max-width:768px){

display:block;


}

`;