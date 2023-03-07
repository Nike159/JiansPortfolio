import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import Cards from "../Components/Me.js";
import Footer from "../Components/Footer";
import Hero1 from "../Components/assets/Hero1.jpg"


function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg= { Hero1 }
        title="Jian Mei"
        text="Welcome To my Page!"
        />
        <Cards />
        <Footer />
        </>
    )
}

export default About;