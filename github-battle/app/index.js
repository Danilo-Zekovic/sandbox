var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function(){
    return (
      <img src={this.props.imageUrl} style={{height:100, width:100}}>
    )
  }
})

}

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div> Hello World </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
