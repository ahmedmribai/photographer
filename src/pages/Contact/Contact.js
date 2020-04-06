import React from 'react';
import axios from 'axios';

import "../../components/CustomButton/CustomButton.css";


class App extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(
    <div style={{backgroundColor:"black", height: "calc(107.6vh - 50px)",overflowY:"hidden"}}>
  	<div className="App "style={{paddingTop:'95px', width:'85%', paddingLeft:"15%", paddingBottom:'50%'}}>
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	<div className="form-group">
      	<label htmlFor="name" style={{color:'white'}}>Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1" style={{color:'white'}}>Email address</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="message" style={{color:'white'}}>Message</label>
      	<textarea className="form-control" rows="7" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	</div>
  	<a type="submit" className="button">Submit</a>
  	</form>
  	</div>
    </div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default App;