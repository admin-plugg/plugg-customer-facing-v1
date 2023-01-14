import React, { useState, useEffect } from "react";
// import "./SideNavBar.css";
import "../App.css";
import userImage from "../img/userImage.jpg";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const SideNavBar = ({ children }) => {
  const location = useLocation();
  const [isExpanded, setExpendState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <div>
      <header className="header">
        <button
          className="menu-icon-btn"
          data-menu-icon-btn
          onClick={() => {
            setExpendState(!isExpanded);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="menu-icon"
          >
            <g>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </g>
          </svg>
        </button>
      </header>
      <div className="container">
        <aside
          style={{ background: "#3B3B3B" }}
          className={isExpanded ? "sidebar" : "sidebar-open"}
        >
          <div className="top-sidebar">
            <a href="#" className="channel-logo">
              <img src={userImage} alt="Channel Logo" className="userImage" />
            </a>
            <div className="hidden-sidebar your-channel">Kapil</div>
            <div className="hidden-sidebar channel-name">
              <b>XYZ brand Loyal User</b>
            </div>
          </div>
          <div className="middle-sidebar">
            <ul className="sidebar-list">
              <li
                className={
                  location.pathname == "/"
                    ? "sidebar-list-item active"
                    : "sidebar-list-item"
                }
              >
                <a
                  href="#"
                  className="sidebar-link"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <svg
                    className="sidebar-icon"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <g>
                      <path
                        fill="white"
                        d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                      ></path>
                    </g>
                  </svg>
                  <div className="hidden-sidebar">Collectibles</div>
                </a>
              </li>

              <li
                className={
                  location.pathname == "/activity"
                    ? "sidebar-list-item active"
                    : "sidebar-list-item"
                }
              >
                <a
                  href="#"
                  className="sidebar-link"
                  onClick={() => {
                    navigate("/activity");
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="sidebar-icon"
                  >
                    <g>
                      <path
                        fill="white"
                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                      ></path>
                    </g>
                  </svg>
                  <div className="hidden-sidebar">Activites</div>
                </a>
              </li>
              <li className="sidebar-list-item">
                <a href="#" className="sidebar-link">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="sidebar-icon"
                  >
                    <g>
                      <path
                        fill="white"
                        d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
                      ></path>
                    </g>
                  </svg>
                  <div className="hidden-sidebar">FAQs</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-sidebar">
            <ul className="sidebar-list">
              <li className="sidebar-list-item">
                <a href="#" className="sidebar-link">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="sidebar-icon"
                  >
                    <g>
                      <path
                        fill="white"
                        d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                      ></path>
                    </g>
                  </svg>
                  <div className="hidden-sidebar">Settings</div>
                </a>
              </li>
              <li className="sidebar-list-item">
                <a href="#" className="sidebar-link">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="sidebar-icon"
                  >
                    <g>
                      <path
                        fill="white"
                        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
                      ></path>
                    </g>
                  </svg>
                  <div className="hidden-sidebar">Send Feedback</div>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="content">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default SideNavBar;
