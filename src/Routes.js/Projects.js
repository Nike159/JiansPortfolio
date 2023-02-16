import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ProjectImg from "../Components/assets/ProjectImg.jpg";
import Cards from "../Components/Me.js";

function Projects (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={ProjectImg}
        title="Projects"
        text="My Projects"
        />
        <Cards />
        </>
    )
}

export default Projects;