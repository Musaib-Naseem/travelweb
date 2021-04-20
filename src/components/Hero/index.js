import React from "react";
import{HeroContainer,HeroWrapper,btnContainer} from "./HeroElements";
import {Button} from "../Button/index";

const Hero=()=>{

return(

    <HeroContainer>
    <HeroWrapper>


<h1>Adventure Awaits</h1>
<h1>What are you waiting for ?</h1>
<br />
<br />

<btnContainer>

<Button buttonSize="btn--large" buttonStyle="btn--primary">Get Started</Button>
&nbsp;&nbsp;<Button buttonSize="btn--large" buttonStyle="btn--outline">Watch Trailer <i className="far  fa-play-circle" /></Button>
</btnContainer>
    </HeroWrapper>
    </HeroContainer>


);


}

export default Hero;