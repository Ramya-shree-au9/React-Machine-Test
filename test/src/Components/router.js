import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import Signup from "./TalentSignup";


const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      
        <Route exact path="/" component={Signup} />
   
       
      
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routing;
