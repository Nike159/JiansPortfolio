import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ContactImg from "../Components/assets/ContactImg.jpg"

function Contact (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={ContactImg}
        title="Contacts"
        text="My Projects"
        />
        </>
    )
}

export default Contact;