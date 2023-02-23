import '../Components/IconStyles.css';
import { motion } from "framer-motion"
import Icon from "./Icon.js"
import RImg from "./assets/RImg.png";
import JavascriptImg from "./assets/JavascriptImg.png";
import BootstrapImg from "./assets/BootstrapImg.png";
import HTMLImg from "./assets/HTMLImg.png";
import CSSImg from "./assets/CSSImg.png";
import FigmaImg from "./assets/FigmaImg.png";
import GitIcon from "./assets/GitIcon.png"

function Icons() {
    const list1Items = [ 'This Portfolio Website'];
    const list2Items = ['NBA Score Counter', 'Weather App'];
    const list3Items = ['Currently None'];
    const list4Items = ['NBA Score Counter', 'Blog', 'Weather App'];
    const list5Items = ['This Portfolio Website'];
    const list6Items = ['This Portfolio Website', 'NBA Score Counter', 'Weather App', 'Blog'];
    const list7Items = ['This Portfolio Website', 'NBA Score Counter', 'Weather App', 'Blog'];
  
    return (
    <div className="container">
        <motion.div 
                        initial={{
                            opacity:0,
                            scale:1,
                            x:1000
                        }}
                        whileInView={{
                            opacity:1,
                            scale:1,
                            x:0
                        }}
                        transition={{
                            duration:2,
                            delay:0.25
                        }}
        className="title1">Languages
        </motion.div>
            <motion.div
                        initial={{
                            opacity:0,
                            scale:1,
                            x:-1000
                        }}
                        whileInView={{
                            opacity:1,
                            scale:1,
                            x:0
                        }}
                        transition={{
                            duration:2,
                            delay:0.5
                        }}
             className="image-list">
                    <Icon image={RImg} listItems={list1Items} />
                    <Icon image={JavascriptImg} listItems={list2Items} />
                    <Icon image={BootstrapImg} listItems={list3Items} />
                    <Icon image={HTMLImg} listItems={list4Items} />
                    <Icon image={FigmaImg} listItems={list5Items} />
                    <Icon image={CSSImg} listItems={list6Items} />
                    <Icon image={GitIcon} listItems={list7Items} />
            </motion.div>
    </div>
        
    );
  }
  export default Icons;