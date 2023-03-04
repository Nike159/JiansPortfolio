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
                heading="NBA Project"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                url="https://github.com/Nike159/NBA-app"
                web="https://nike159.github.io/NBA-app/"
            />
            <CardData 
                image={Weather}
                heading="Weather App"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                web=""
                url="https://github.com/Nike159/Weather-App"
            />
             <CardData 
                image={Blog}
                heading="Blog Project"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                web="https://nike159.github.io/BlogProject/"
                url="https://github.com/Nike159/BlogProject"
            />
        </div>
        
        </>
    )
}

export default Cards
