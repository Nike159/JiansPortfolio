import './MeStyles.css'
import MeData from './MeData';
import Family from './assets/Family.jpg';
import Temp from './assets/temp.webp';
import { motion } from 'framer-motion';

const Me = () => {
    return(
        <div className="Me">
            <h1>About Me</h1>
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
            
                }}>
            <MeData 
                className="Saying1"
                heading="Professional Life"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img1={Temp}
                img2={Family}
            />
            </motion.div>
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
                    delay:0.5
                }}>
            <MeData
                className="Saying1-reverse"
                heading="Personal Life"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img1={Temp}
                img2={Family}
            />
            </motion.div>
        </div>
    )
}

export default Me