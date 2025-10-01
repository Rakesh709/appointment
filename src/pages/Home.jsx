
import React from 'react'
import Hero from "../components/Hero.jsx"

import ServicesSection from '../components/ServicesSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

import About from "../components/About.jsx"

const Home = () => {
    return (
        <>

            <Hero />
            <About/>
            <ServicesSection/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default Home