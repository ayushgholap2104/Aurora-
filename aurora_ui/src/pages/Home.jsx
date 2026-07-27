import "../styles/home.css";
import logo from "../assets/img/AuroraLogo.png";
import {Link} from 'react-router-dom'

function Home(){
  return(
    <>
    <div className="Sidebar_container">
      <div className="Aurora_logo"></div>
      <div className="sidebar_icon"></div>
      <div className="sidebar_menu">
        <Link to="./home" className="home-btn">Home</Link>
        <Link to="./about" className="about-btn">About Us</Link>
        <Link to="./contact" className="contact-btn">Contact Us</Link>
      </div>
    </div>
    </>
  )
}