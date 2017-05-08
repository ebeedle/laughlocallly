import React from 'react';
// import $ from 'jquery';
import {compareHash, createHash, hashPassword, createSalt} from '../../server/hashUtils.js'
import { Form, FormGroup, Input, Button } from 'reactstrap';

class Login extends React.Component {
 constructor(props){
  super(props);  
    this.state = {
      username: "",
      password: ""
    }
  this.handleChangeUsername = this.handleChangeUsername.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value 
      // password: event.target.value
    })
  }
  handleChangePassword(event) {
    console.log(event.target.value)
    this.setState({
      password: event.target.value 
      // password: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('a password/username was submitted: ' + this.state.username)
    event.preventDefault();
    // let salt = createSalt();
    // let password = hashPassword(this.state.password, salt);
    // console.log(password);
    // console.log('salt', salt) 
    // $.get('/getComedians', {username:this.state.username})
    // .done(function(data) {
    //   console.log(data);
    // })
  }
  render () {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} required/>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChangePassword} required/>
        </FormGroup>
        <Button> Submit </Button>
      </Form>
      </div>
        

    )
  }

}

export default Login;