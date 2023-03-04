import './CardsStyles.css';

function CardData(props){
    return(
        <div className='t-card'>
            <div className='t-img'>
                <img alt="img" src={props.image}/>
            </div>
            <div className='card-content'>
                <h4 className='card-title'>{props.heading}</h4>
                <p className='card-description'>{props.text}</p>
                <div className='btn'>
                <a href={props.url}><button className='url' >Source Code</button></a>
                <a href={props.web}><button className='url' >Demo</button></a>
                </div>
            </div>
            
        </div>
    )
}

export default CardData