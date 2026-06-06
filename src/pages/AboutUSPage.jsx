
import React from "react";
import About from "../Components/About";
import Testimonial from "../Components/Testimonial";
import HeroSection from "../Components/HeroSection";

export default function AboutUSPage(){
    return(
        <>
            <HeroSection title='About Us'/>
            <About/>
            <Testimonial/>
        </>
    )
}