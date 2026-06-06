
import React from "react";

import Testimonial from "../Components/Testimonial";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";


export default function TestimonialPage(){
    return(
        <>
            <HeroSection title='testimonials'/>
            <Testimonial/>
            <About/>
        </>
    )
}