import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {GlobalStyles} from "./GlobalStyles";
import Hero from "./components/Hero/index";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

const App=()=>{

return(

<Router>


<Navbar />
<GlobalStyles />

<Switch>

<Route path="/" exact component={Home} />
<Route path="/products" exact component={Products} />
<Route path="/services" exact component={Services} />
<Route path="/sign-up" exact component={SignUp} />

</Switch>

</Router>


);


}


export default App;