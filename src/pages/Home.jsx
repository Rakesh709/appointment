
import React from 'react'
import Hero from "../components/Hero.jsx"
import About from './About.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'
import BookingModal from '../components/BookingModal.jsx'
const Home = () => {
    return (
        <>

            <Hero />
            <About />
            <ServicesSection/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default Home