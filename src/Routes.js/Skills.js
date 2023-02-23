import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import SkillsImg from "../Components/assets/SkillsImg.jpg";
import IconData from "../Components/IconData";
import Footer from "../Components/Footer";

function Skills (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={SkillsImg}
        title="Skills"
        text="Languages Learned"
        />
        <IconData />
        <Footer />
        </>
    )
}

export default Skills;