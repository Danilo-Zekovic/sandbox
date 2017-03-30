import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
              <span className="sr-only">Toggle navigation</span>

              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="/">BG View</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar">
            <div className="nav navbar-nav navbar-right btn-group">
              <button className="btn btn-default navbar-btn" onClick={this.props.loadPrev}>Prev</button>
              <button className="btn btn-default navbar-btn" onClick={this.props.loadNext}>Next</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopBar;
