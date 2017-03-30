import React, { Component } from 'react';

import TopBar from './TopBar.jsx';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      photoId: -1,
    };

    this.loadPrev = this.loadPrev.bind(this);
    this.loadNext = this.loadNext.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
      .then(resp => resp.json())
      .then(photos => this.setState({
        photos,
        photoId: 0,
      }));
  }

  loadPrev() {
    this.setState({
      photoId: (this.state.photoId - 1) % this.state.photos.length,
    });
  }

  loadNext() {
    this.setState({
      photoId: (this.state.photoId + 1) % this.state.photos.length,
    });
  }

  renderMain() {
    if (this.state.photoId === -1) {
      return null;
    }

    return <Main photo={this.state.photos[this.state.photoId]} />;
  }

  render() {
    return (
      <div>
        <TopBar loadPrev={this.loadPrev} loadNext={this.loadNext} />

        <div className="container-fluid">
          <div className="row">
            <SideBar />

            {this.renderMain()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
