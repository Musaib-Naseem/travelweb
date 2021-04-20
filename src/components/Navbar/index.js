import React,{useState,useEffect} from "react";
import {AiFillFire} from "react-icons/ai";
import {Link} from "react-router-dom";
import "./index.css";
import {Button} from "../Button/index";
import {NavContainer,NavContainerWrapper,Logo,NavbarMenu,NavbarLink} from "./NavbarElements";

const Navbar=()=>{



const [click,setClick]=useState(false);

const toggle=()=>{

setClick(!click);

}

const closeMobileMenu=()=>{ setClick(false)};

const [button,setButton] = useState(true);

const showButton=()=>{

if(window.innerWidth <= 768){

    setButton(false);

} else{
 
    setButton(true);

}


}

window.addEventListener("resize",showButton);

useEffect(()=>{ showButton()},[]);


return(


    <NavContainer>
    <NavContainerWrapper>
    
    <Logo to="/">TravelWeb <AiFillFire /></Logo>

    {/* <NavbarMenu>
    
    <NavbarLink>Home</NavbarLink>
    <NavbarLink>Services</NavbarLink>
    <NavbarLink>Products</NavbarLink>
    </NavbarMenu> */}

    <div className="menu-icon" onClick={toggle}>

    <i className={click ? "fas fa-times" : "fas fa-bars"}  />
    
   
    </div>
    
    <div className="box">
    <ul className={click ? "nav-menu active" : "nav-menu" }>
  
  
    <li className="nav-item">
    <Link to="/" className="nav-links" onClick={closeMobileMenu}> Home </Link>
    </li>

    <li className="nav-item">
    <Link to="/services" className="nav-links" onClick={closeMobileMenu}> Services </Link>
    </li>

    <li className="nav-item">
    <Link to="/products" className="nav-links" onClick={closeMobileMenu}> Products </Link>
    </li>

    <li className="nav-item">
    <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}> Sign-up </Link>
    </li>
    
    
    </ul>
    
    
    {button && <Button  buttonSize="btn--medium" buttonStyle="btn--primary">Sign Up</Button>}
    
    </div>
    </NavContainerWrapper>
    </NavContainer>



);


}

export default Navbar;