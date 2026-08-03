import "../styles/home.css";
import logo from "../assets/img/AuroraLogo.png";
import LogoIcon from "../assets/img/AuroraIcon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const sidebarClick = () =>{
  setisSidebaropen(prev => !prev)
}
function Home() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(true)
  return (
    <>
      <div className="Aurora_container">
        <div className="Sidebar_container">
          <div className="sidebar_header">
            <div className="aurora_icon">
              <img src={LogoIcon} alt="AuroraIcon" />
              <p className="platform_name hide_text">Aurora</p>
            </div>
            <div 
            className="sidebar_icon"
            onClick={sidebarClick}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="new_chat hide_bg">
            <i className="fa-regular fa-pen-to-square"></i>
            <p className="hide_text">New Chat </p>
          </div>
          <div className="sidebar_menu">
            <div className="menu  active hide_bg" id="home_section">
              <i className="fa-regular fa-house"></i>
              <Link to="./home" className="home-btn hide_text">
                Home
              </Link>
            </div>
            {/* <div className="menu" id="about_section">
              <i className="fa-solid fa-circle-info"></i>
              <Link to="./about" className="about-btn hide_text">
                About Us
              </Link>
            </div>
            <div className="menu" id="contact_section">
              <i className="fa-regular fa-comment"></i>
              <Link to="./contact" className="contact-btn hide_text">
                Contact Us
              </Link>
            </div> */}
          </div>
          <div className="sidebar_footer">
            <div className="user_info">
              <p className="username_Letter">A</p>
              <div className="userName hide_text">Ayush Gholap</div>
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
          <div className="chat_container">
            <div className="bot_message">
              <div className="message_content">
                <h3>Hello!</h3>
                <p>
                  I'm Aurora, your government scheme assistant.
                  <br />
                  I can help you find government schemes,check eligibility,
                  <br />
                  required documents,benefits,application process and much more.
                  <br />
                  How can I assist you today?
                </p>
                <span className="msg_time">10:30 AM</span>
              </div>
            </div>
            <div className="user_message">
              <div className="message_content">
                <p>What is PM Kisan Yojana?</p>
                <span className="msg_time">10:35 AM</span>
              </div>
            </div>
            <div className="bot_message">
              <div className="message_content">
                <h3>Hello!</h3>
                <p>
                  I'm Aurora, your government scheme assistant.
                  <br />
                  I can help you find government schemes,check eligibility,
                  <br />
                  required documents,benefits,application process and much more.
                  <br />
                  How can I assist you today?
                </p>
                <span className="msg_time">10:30 AM</span>
              </div>
            </div>
            <div className="user_message">
              <div className="message_content">
                <p>What is PM Kisan Yojana?</p>
                <span className="msg_time">10:35 AM</span>
              </div>
            </div>
            <div className="bot_message">
              <div className="message_content">
                <h3>Hello!</h3>
                <p>
                  I'm Aurora, your government scheme assistant.
                  <br />
                  I can help you find government schemes,check eligibility,
                  <br />
                  required documents,benefits,application process and much more.
                  <br />
                  How can I assist you today?
                </p>
                <span className="msg_time">10:30 AM</span>
              </div>
            </div>
            <div className="user_message">
              <div className="message_content">
                <p>What is PM Kisan Yojana?</p>
                <span className="msg_time">10:35 AM</span>
              </div>
            </div>
            <div className="bot_message">
              <div className="message_content">
                <h3>Hello!</h3>
                <p>
                  I'm Aurora, your government scheme assistant.
                  <br />
                  I can help you find government schemes,check eligibility,
                  <br />
                  required documents,benefits,application process and much more.
                  <br />
                  How can I assist you today?
                </p>
                <span className="msg_time">10:30 AM</span>
              </div>
            </div>
            <div className="user_message">
              <div className="message_content">
                <p>What is PM Kisan Yojana?</p>
                <span className="msg_time">10:35 AM</span>
              </div>
            </div>
          </div>
          <div className="chat_footer">
            <div className="Input_message">
              <i className="fa-solid fa-plus" id="Input_filesbtn"></i>
              <input
                type="text"
                placeholder="Ask Aurora.."
                id="user_input"
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
