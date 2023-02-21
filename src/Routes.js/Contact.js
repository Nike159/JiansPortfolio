import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ContactImg from "../Components/assets/ContactImg.jpg"
import ContactForm from "../Components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={ContactImg}
        title="Contacts"
        text="Feel Free To Reach Out"
        />
        <ContactForm />
        </>
    )
}

export default Contact;