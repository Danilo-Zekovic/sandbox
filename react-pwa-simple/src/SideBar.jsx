import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="col-sm-3 col-lg-2">

        <ul className="list-group">
          <li className="list-group-item">
            <h3 className="text-center">Sidebar</h3>
          </li>

          <li className="list-group-item">
            <a href="#">Cras justo odio</a>
          </li>

          <li className="list-group-item">
            <a href="#">Dapibus ac facilisis in</a>
          </li>

          <li className="list-group-item">
            <a href="#">Morbi leo risus</a>
          </li>

          <li className="list-group-item">
            <a href="#">Porta ac consectetur ac</a>
          </li>

          <li className="list-group-item">
            <a href="#">Vestibulum at eros</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
