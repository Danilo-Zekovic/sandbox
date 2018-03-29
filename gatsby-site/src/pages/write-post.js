import React from 'react'
import Quill from 'quill'

var Delta = Quill.import('delta')

// Quill toolbar options
const quillOptions = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['image', 'code-block', 'blockquote'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
}

let quill;
let quillPost;

var change = new Delta()

// Save periodically
setInterval(function() {
  if (change.length() > 0) {
    console.log('Saving changes', change);

    change = new Delta();
  }
}, 5*1000);

class NewPost extends React.Component {
  //try and init the Quill in the constructor
  constructor(){
    super()
    this.state= {
      date:new Date(),
      post:'',
      title:'',
      subTitle:'',
      author:'',
      description:'',
      posted:false,
    }
    this.handleGetContent = this.handleGetContent.bind(this)
    this.addPost = this.addPost.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleGetContent(){
    // just testing some stuff
    let foo = JSON.stringify(quill.getContents())
    let bar = JSON.parse(foo)
    this.setState({
      post:foo
    })
    // create the fake post container
    quillPost = new Quill('#fake-post', {
      readOnly:true
    })
    // add content to fake post
    quillPost.setContents(bar)//quill.getContents())
  }

  componentDidMount(){
    console.log("<<<< DID MOUNT >>>>");
     quill = new Quill('#editor', quillOptions)

    change = new Delta()
    quill.on('text-change', function(delta) {
      change = change.compose(delta);
      //console.log(quill.getContents());
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(target);
    console.log("<<<< INPUT CHANGE >>>>")
    console.log(this.state);

    this.setState({
      [name]: value
    });
  }

  // this adds the stuff to the db
  addPost(){

  }

  render(){
    return(
      <div>
        <div className='container'>
          <h1>Write Post</h1>

          <div id='editor' ></div>
          <br/>
          <button className="btn btn-primary" onClick={this.addPost}>Save Post</button>
        </div>
      </div>
    )
  }
}

export default NewPost
