import React, { Component } from 'react';

class Main extends Component {
  render() {
    if (this.props.photo === null) {
      return null;
    }

    return (
      <div className="col-sm-9 col-lg-10">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.props.photo.title}
            </h3>
          </div>

          <div className="panel-body">
            <img src={this.props.photo.url} className="img-responsive" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
