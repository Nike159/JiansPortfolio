import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import Cards from "../Components/Me.js";


function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        title="A Journey Of Knowledge"
        text="Never Stop Learning"
        />
        <Cards />
        </>
    )
}

export default About;