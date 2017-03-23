var React = require('react');

var Main = React.createClass({
  render:function(){
    return (
      <div>
        Hello from Main! I am everywhere!
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
