import "./NavbarStyles.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";
import logo from "../Components/assets/logo.png";

const Logo = () => {
    return (
      <div className="logo">
      <img src={logo} alt="Logo" style={{ height: "70px", width: "75px" }} />
      </div>
    );
  };

class Navbar extends Component{
    state = { clicked: "flase" };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){     
        return(         
            <nav className='NavbarItems'>
                <div className='navbar-logo'><Logo /></div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;