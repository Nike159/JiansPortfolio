import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ProjectImg from "../Components/assets/ProjectImg.jpg";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";


function Projects (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={ProjectImg}
        title="Projects"
        text="Check Out My Projects"
        />
        <Cards />
        <Footer />
        </>
    )
}

export default Projects;