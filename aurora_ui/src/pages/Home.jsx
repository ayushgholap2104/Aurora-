import "../styles/home.css";
import logo from "../assets/img/AuroraLogo.png";
import LogoIcon from "../assets/img/AuroraIcon.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="Aurora_container">
        <div className="Sidebar_container">
          <div className="sidebar_header">
            <div className="aurora_icon">
              <img src={LogoIcon} alt="AuroraIcon" />
              <p className="platform_name">Aurora</p>
            </div>
            <div className="sidebar_icon">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="new_chat">
            <i className="fa-regular fa-pen-to-square"></i>
            <p>New Chat</p>
          </div>
          <div className="sidebar_menu">
            <div className="menu active" id="home_section">
              <i className="fa-regular fa-house"></i>
              <Link to="./home" className="home-btn">
                Home
              </Link>
            </div>
            <div className="menu" id="about_section">
              <i className="fa-solid fa-circle-info"></i>
              <Link to="./about" className="about-btn">
                About Us
              </Link>
            </div>
            <div className="menu" id="contact_section">
              <i className="fa-regular fa-comment"></i>
              <Link to="./contact" className="contact-btn">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="sidebar_footer">
            <div className="user_info">
              <p className="username_Letter">A</p>
              <div className="userName">Ayush Gholap</div>
            </div>
          </div>
        </div>
        <main className="main_content">
          <div className="Chat_head">
            <div className="light_dark">
              <i className="fa-regular fa-moon"></i>
            </div>
            <div className="chat_info">
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="chat_footer">
            <div className="Input_message">
              <i className="fa-solid fa-plus" id="Input_filesbtn"></i>
              <input type="text"
              placeholder="Ask Aurora"
              className="user_query"
              />
              <i className="fa-solid fa-arrow-up" id="Send_btn"></i>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
