import { Component } from "react";
import Logo from './../../assets/logo.png';
import { Link } from "react-router-dom";
import { ManuData } from "./ManuData";
import './navbarStyle.css';


class Navbar extends Component{
   
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked});
    }
render(){
    return(
       
            <nav className="NavbarItems">
                <Link to='/' className="Logo"> <img src={Logo} alt="PharmaEnclave" className="fab"/></Link>   {/* For the Logo/Company, and a link for the Home page */}
                <div className="manu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-manu active" : "nav-manu"}>
                    {ManuData.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link to={item.URL} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
    
        );
    }
}

export default Navbar;