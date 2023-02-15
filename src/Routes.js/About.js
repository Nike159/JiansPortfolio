import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";

function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        title="About"
        text="Never Stop Learning"
        />
        </>
    )
}

export default About;