import "../styles/home.css";
import logo from "../assets/img/AuroraLogo.png";
import LogoIcon from "../assets/img/AuroraIcon.png";
import AuroraDarkBg from "../assets/img/AuroraDarkBg.png";
import AuroraWhiteBg from "../assets/img/AuroraWhiteBg.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:5000";

const WELCOME_MESSAGE = {
  sender: "bot",
  greeting: "Hello!",
  text: "I'm Aurora, your government scheme assistant. I can help you find government schemes, check eligibility, required documents, benefits, application process and much more.\nHow can I assist you today?",
  time: "",
};

function formatTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isChatinfoOpen, setIsChatinfoOpen] = useState(false);
  const [isDeleteClick, setIsDeleteClick] = useState(false);
  const [isPrecautionOpen, setIsPrecautionOpen] = useState(false);
  const [isProfileClick, setIsProfileClick] = useState(false);

  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [userInput, setUserInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("aurora_user") || "null");
  const displayName = storedUser?.name || "Guest";

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
  const profileClick = () =>{
    setIsProfileClick((prev =>!prev))
  }
  const confirmDelete = () => {
    setMessages([WELCOME_MESSAGE]);
    setIsDeleteClick(false);
  };

  const handleSend = async () => {
    const text = userInput.trim();
    if (!text || isSending) return;

    const newUserMessage = { sender: "user", text, time: formatTime() };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsSending(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response, time: formatTime() },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Sorry, I couldn't reach the server. (${err.message})`,
          time: formatTime(),
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
          <div
            className={`new_chat ${!isSidebarOpen ? "collapse" : ""}`}
            onClick={confirmDelete}
          >
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
                <Link to="/home" className="home-btn">
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
            <div
            onClick={profileClick}
             className="user_info">
              <p className="username_Letter">
                {displayName.charAt(0).toUpperCase()}
              </p>
              {isSidebarOpen && (
                <div className="userName hide_text">{displayName}</div>
              )}
            </div>
            <div className={`profile_container ${isProfileClick ? "show":""}`}>
              <div className="profile_info profileAction">
                <p className="userF_letter">
                  {displayName.charAt(0).toUpperCase()}
                </p>
                {isSidebarOpen && (
                  <div className="userName hide_text">{displayName}</div>
                )}
              </div>
              <div className="Logout profileAction">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
              </div>
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
                {isChatinfoOpen && (
                  <div
                    onClick={() => setIsChatinfoOpen(false)}
                    className="chatinfoOverlay"
                  ></div>
                )}
                <div
                  className={`chatAction_container ${isChatinfoOpen ? "show" : ""}`}
                >
                  <div
                    className="fileShare chatAction"
                    onClick={shareConversation}
                  >
                    <i className="bi bi-download"></i>
                    <span>Download PDF</span>
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
            {messages.map((msg, index) =>
              msg.sender === "bot" ? (
                <div className="bot_message" key={index}>
                  <div className="message_content">
                    {msg.greeting && <h3>{msg.greeting}</h3>}
                    <p style={{ whiteSpace: "pre-line" }}>{msg.text}</p>
                    {msg.time && <span className="msg_time">{msg.time}</span>}
                  </div>
                </div>
              ) : (
                <div className="user_message" key={index}>
                  <div className="message_content">
                    <p>{msg.text}</p>
                    <span className="msg_time">{msg.time}</span>
                  </div>
                </div>
              ),
            )}
            {isSending && (
              <div className="bot_message">
                <div className="message_content">
                  <p>Typing...</p>
                </div>
              </div>
            )}
          </div>
          <div className="chat_footer">
            <div className="Input_message">
              <div className="inputFilebtn">
                <i
                  onClick={uploadClick}
                  className="fa-solid fa-plus"
                  id="inputAddIcon"
                ></i>
                {isUploadOpen && (
                  <div
                    onClick={() => setIsUploadOpen(false)}
                    className="uploadOverlay"
                  ></div>
                )}
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
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
              />
              <i
                className="fa-solid fa-arrow-up"
                id="Send_btn"
                onClick={handleSend}
              ></i>
            </div>
          </div>
          {isUploadOpen && (
            <div
              onClick={() => setIsUploadOpen(false)}
              className="uploadOverlay"
            ></div>
          )}
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
            <button
              onClick={confirmDelete}
              className="deleteChatbtn"
              type="button"
            >
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
