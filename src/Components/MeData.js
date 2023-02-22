import { Component } from 'react';
import './MeStyles.css'


class MeData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="Info">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.paragraph}</p>
                </div>
                <div className='image'>
                    <img alt='img' src={this.props.img1}/>
                    <img alt='img' src={this.props.img2}/>
                </div>
            </div>
        )
    }
    
}
export default MeData