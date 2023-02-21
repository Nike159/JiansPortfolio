import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import SkillsImg from "../Components/assets/SkillsImg.jpg";
import IconData from "../Components/IconData";

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
        </>
    )
}

export default Skills;