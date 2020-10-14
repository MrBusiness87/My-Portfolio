import React from "react";

export const PAGE_NAMES = {
  HOME: "Home",
  ABOUT: "About",
  PORTFOLIO: "Portfolio",
  CONTACT: "Contact",
  NODE: "Node"
}

const navThumb = {
  margin:"4px",
  width:"50px",
}

function NavTabs(props) {
  return (
    <p class="navbar">
      <div class="links">
        <a href="#home" onClick={() => props.handlePageChange("Home")} title="HOME" className="nav-link">
        <img src={require ("./assets/links/home.png")} style={navThumb} />
        </a>
        <a href="#about" onClick={() => props.handlePageChange("About")} title="ABOUT" className="nav-link">
        <img src={require ("./assets/links/about.png")} style={navThumb} />
        </a>
        <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} title="PORTFOLIO" className="nav-link">
        <img src={require ("./assets/links/portfolio.png")} style={navThumb} />
        </a>
        <a href="#node" onClick={() => props.handlePageChange("Node")} title="NODE" className="nav-link">
        <img src={require ("./assets/links/nodejs.png")} style={navThumb} />
        </a>
      </div>
    </p>
  );
}

export default NavTabs;
