import './MeStyles.css'
import MeData from './MeData';
import Family from './assets/Family.jpg';
import Temp from './assets/temp.webp';
import Temp2 from './assets/Temp2.jpg';
import Me1 from './assets/Me1.jpg';


const Me = () => {
    return(
        <div className="Me">
            <h1>About Me</h1>
            <div>
            <MeData 
                className="Saying1"
                heading="Get To Know Me..."
                paragraph="&nbsp;&nbsp;&nbsp;&nbsp;Hi!! My name is Jian but most people call me Allen. Welcome to my corner of the internet. I am a  self-taught Front-end Developer based in Chicago,IL. I enjoy turning ideas into something you can see and interact with. My interest in web development started when I wanted to create a app for myself to make my life more convient. Turns out coding is a lot of fun! Also the challenge and satisfaction you get when you solve a problem that you have been stuck on is really amazing. I like to think of myself as a problem solver and although I might not have all the answers I will do my best to find them. "
                img1={Temp}
                img2={Temp2}
            />
            </div>
            <div>
               
            <MeData
                className="Saying1-reverse"
                heading="A Bit More..."
                paragraph="&nbsp;&nbsp;&nbsp;&nbsp;Outside of coding I am also a family man and a proud 'Girl Dad'. Having your child give you a big hug when you come home and tell you about their day is a great feeling. I also enjoy traveling the world seeing and experiencing new things. I'd like to say I am well traveled but there are many more places still on my list. "
                img1={Me1}
                img2={Family}
            />
            </div>
        </div>
    )
}

export default Me