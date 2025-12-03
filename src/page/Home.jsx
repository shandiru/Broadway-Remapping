import React from 'react'
import Hero from "../components/Hero";
import Service from "../components/ServicesSection";
import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Photo"
import VehicleLookup from "../components/VehicleLookup"
import EngineSystemSolutions from "../components/Service/EngineSystemSolutions"
import ExtraServicesOffered from "../components/Service/ExtraServicesOffered"
import StageOneRemapping from "../components/Service/StageOneRemapping"
const Home = () => {
    return (
        <div>
            <Hero />
            {/* <Service /> */}
               <StageOneRemapping />
           <EngineSystemSolutions />
           <ExtraServicesOffered />
            <About />
            <Review />
            < Gallery />
            {/* <WhyChooseUs /> */}
            <VehicleLookup />
            <Contact />
        </div>
    )
}

export default Home
