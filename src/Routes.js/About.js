import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import Cards from "../Components/Me.js";
import Footer from "../Components/Footer";
import IntroImg from "../Components/assets/IntroImg.png";


function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={ IntroImg }
        title="Jian Mei"
        text="Welcome To my Page!"
        />
        <Cards />
        <Footer />
        </>
    )
}

export default About;