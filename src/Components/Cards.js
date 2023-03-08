import './CardsStyles.css';
import CardData from './CardData';
import Basketball from '../Components/assets/Basketball.jpg';
import Weather from '../Components/assets/Weather.jpg';
import Blog from '../Components/assets/Blog.jpg';

function Cards() {
    return(
        <>
        <div className='title'>
            <h1>Check Out My Projects</h1>
        </div>
        <div className='card'>
            
            <CardData 
                image={Basketball}
                heading="NBA Total Score Tracker"
                text="Track live current total scores in the NBA! A app for sports bettors that tracks the total score for over/under betting so you wont have to constantly do it in your head and just enjoy the game."
                url="https://github.com/Nike159/NBA-app"
                web="https://nike159.github.io/NBA-app/"
            />
            <CardData 
                image={Weather}
                heading="Weather App"
                text="Find Out whats the weather! This was a following along project that helped me understand how to read documentation of APIs and how to access and render it onto the screen."
                web="https://nike159.github.io/Weather-App/"
                url="https://github.com/Nike159/Weather-App"
            />
             <CardData 
                image={Blog}
                heading="Blog Project"
                text="Check out my first project. This was my very first project after learning HTML and CSS. I leave this here to always be able to come and see how far I have progressed as a developer."
                web="https://nike159.github.io/BlogProject/"
                url="https://github.com/Nike159/BlogProject"
            />
        </div>
        
        </>
    )
}

export default Cards
