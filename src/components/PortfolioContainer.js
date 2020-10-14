import React, { Component } from "react";
import NavTabs, { PAGE_NAMES } from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Node from "./pages/Node";
import Footer from "./Footer";

class PortfolioContainer extends Component {
  state = {
    currentPage: PAGE_NAMES.HOME
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  renderTabs = () => {
    switch (this.state.currentPage) {
      case PAGE_NAMES.HOME:
        return <Home />;
      case PAGE_NAMES.ABOUT:
        return <About />;
      case PAGE_NAMES.PORTFOLIO:
        return <Portfolio />;
        case PAGE_NAMES.NODE:
          return <Node />;
      default:
        return <Home />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderTabs()}
        <br />
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
