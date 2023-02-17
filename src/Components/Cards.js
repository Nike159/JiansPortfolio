import './CardsStyles.css';
import CardData from './CardData';
import Basketball from '../Components/assets/Basketball.jpg';

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
            />
            <CardData 
                image={Basketball}
                heading="NBA Project"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
            />
             <CardData 
                image={Basketball}
                heading="NBA Project"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
            />
        </div>
        
        </>
    )
}

export default Cards
