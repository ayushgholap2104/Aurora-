import "../styles/home.css";
import logo from "../assets/img/AuroraLogo.png";
import LogoIcon from "../assets/img/AuroraIcon.png";
import AuroraDarkBg from "../assets/img/AuroraDarkBg.png";
import AuroraWhiteBg from "../assets/img/AuroraWhiteBg.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isChatinfoOpen, setIsChatinfoOpen] = useState(false);
  const [isDeleteClick, setIsDeleteClick] = useState(false);
  const [isPrecautionOpen, setIsPrecautionOpen] = useState(false);

  const sidebarClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const themeChange = () => {
    setIsDarkMode((prev) => !prev);
  };
  const uploadClick = () => {
    setIsUploadOpen((prev) => !prev);
  };
  const chatinfoClick = () => {
    setIsChatinfoOpen((prev) => !prev);
  };
  const shareConversation = () => {
    setIsChatinfoOpen(false);
  };
  const deleteConversation = () => {
    setIsChatinfoOpen(false);
    setIsDeleteClick(true);
  };
  const fileClick = () => {
    setIsUploadOpen(false);
  };
  const cancleDelete = () => {
    setIsDeleteClick(false);
  };

  return (
    <>
      <div className="Aurora_container">
        {isSidebarOpen && (
          <div
            className="sidebarOverlay"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        <div
          className={`Sidebar_container ${!isSidebarOpen ? "active" : ""} ${!isDarkMode ? "light" : ""}`}
        >
          <div className={`sidebar_header ${!isSidebarOpen ? "collapse" : ""}`}>
            <div className={`aurora_icon ${!isSidebarOpen ? "collapse" : ""}`}>
              <img src={LogoIcon} alt="AuroraIcon" />
              {isSidebarOpen && <p className="platform_name">Aurora</p>}
            </div>
            <div
              className={`sidebar_icon ${!isSidebarOpen ? "collapse" : ""}`}
              onClick={sidebarClick}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className={`new_chat ${!isSidebarOpen ? "collapse" : ""}`}>
            <i className="fa-regular fa-pen-to-square"></i>
            {isSidebarOpen && <p className="hide_text">New chat </p>}
          </div>
          <div className="sidebar_menu">
            <div
              className={`menu active ${!isSidebarOpen ? "collapse" : ""}`}
              id="home_section"
            >
              <i className="fa-regular fa-house"></i>
              {isSidebarOpen && (
                <Link to="./home" className="home-btn">
                  Home
                </Link>
              )}
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
              {isSidebarOpen && (
                <div className="userName hide_text">Ayush Gholap</div>
              )}
            </div>
          </div>
        </div>
        <main className={`main_content ${!isDarkMode ? "light" : ""}`}>
          <div className="Chat_head">
            <div
              className={`sidebar_icon ${!isSidebarOpen ? "collapse" : ""}`}
              onClick={sidebarClick}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="chat_head_rightItems">
              {isDarkMode ? (
                <i
                  className="bi bi-moon-fill light_dark"
                  id="dark_mode"
                  onClick={themeChange}
                ></i>
              ) : (
                <i
                  className="bi bi-brightness-high-fill light_dark"
                  id="light_mode"
                  onClick={themeChange}
                ></i>
              )}
              <div className="chatBtnContainer">
                <i
                  onClick={chatinfoClick}
                  className="fa-solid fa-ellipsis"
                  id="chat_info"
                ></i>
                <div
                  className={`chatAction_container ${isChatinfoOpen ? "show" : ""}`}
                >
                  <div
                    className="fileShare chatAction"
                    onClick={shareConversation}
                  >
                    <i className="bi bi-upload"></i>
                    <span>Share conversation</span>
                  </div>
                  <div
                    className="fileDelete chatAction"
                    onClick={deleteConversation}
                  >
                    <i className="bi bi-trash3"></i>
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat_container">
            <div className="bot_message">
              <div className="message_content">
                <h3>Hello!</h3>
                <p>
                  I'm Aurora, your government scheme assistant. I can help you
                  find government schemes,check eligibility, required
                  documents,benefits,application process and much more.
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
                  I'm Aurora, your government scheme assistant. I can help you
                  find government schemes,check eligibility, required
                  documents,benefits,application process and much more.
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
                  I'm Aurora, your government scheme assistant. I can help you
                  find government schemes,check eligibility, required
                  documents,benefits,application process and much more.
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
                  I'm Aurora, your government scheme assistant. I can help you
                  find government schemes,check eligibility, required
                  documents,benefits,application process and much more.
                  <br />
                  How can I assist you today?
                </p>
                <span className="msg_time">10:30 AM</span>
              </div>
            </div>
            <div className="user_message">
              <div className="message_content">
                <p>
                  What is PM Kisan Yojana? hello my name is ayush gholap
                  currently pursuing datascience and Ai in RJ college
                </p>
                <span className="msg_time">10:35 AM</span>
              </div>
            </div>
          </div>
          <div className="chat_footer">
            <div className="Input_message">
              <div className="inputFilebtn">
                <i
                  onClick={uploadClick}
                  className="fa-solid fa-plus"
                  id="inputAddIcon"
                ></i>
                <div
                  onClick={fileClick}
                  className={`fileUpload_container ${isUploadOpen ? "show" : ""}`}
                >
                  <div className="fileUpload">
                    <i className="bi bi-paperclip"></i>
                    <span>Add photos & files</span>
                    <input type="file" />
                  </div>
                </div>
              </div>
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
        {isDeleteClick && (
          <div
            className="precautionOverlay"
            onClick={() => setIsDeleteClick(false)}
          ></div>
        )}
        <div className={`precaution_container ${isDeleteClick ? "show" : ""}`}>
          <i className="fa-solid fa-triangle-exclamation"></i>
          <div className="precaution_msg1">Are you Sure?</div>
          <div className="precaution_msg2">
            This action cannot be undone, Your chat will be permanently deleted.
          </div>
          <div className="precaution_icons">
            <button className="deleteChatbtn" type="button">
              Delete
            </button>
            <button
              onClick={cancleDelete}
              className="cancleChatbtn"
              type="button"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
