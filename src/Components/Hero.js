import "./HeroStyles.css";
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion";


function Hero (props){
    return(
        <>
       <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
            <div className="hero-text">
            <AnimatePresence>
                <motion.h1
                    initial={{ fontSize: ".5rem" }}
                    animate={{ fontSize: "3rem" }}
                    exit={{ fontSize: ".5rem" }}
                    transition={{ duration: 2 }}>
                    {props.title}
                </motion.h1>
            </AnimatePresence>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    );
}

export default Hero;