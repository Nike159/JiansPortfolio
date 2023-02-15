import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import SkillsImg from "../Components/assets/SkillsImg.jpg";

function Skills (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={SkillsImg}
        title="Skills"
        text="My Projects"
        />
        </>
    )
}

export default Skills;