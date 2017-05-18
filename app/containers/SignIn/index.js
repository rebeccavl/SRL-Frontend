/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

export default class SignIn extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
    }
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }


  storeSignIn = () => {
    var data = new FormData();
    data.append("email",this.state.email);
    data.append("password",this.state.password);
    fetch("http://localhost:8000/api/SignIn", {
      method:"post",
      body:data
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.error){
        alert(json.error);
      }

      else if (json.token !== false) {
        this.setState({
          clicked:true
        })
        sessionStorage.setItem('token',json.token);
        alert('Welcome');
      }
      else if (json.token === false) {
        alert('Invalid Credentials');
      }
    }.bind(this))
  }

  render() {
    const mainStyle={
                    display:"flex",
                    flexDirection:"column",
                    margin:"25%",
                    alignItems:"center"
                    }
    const emailStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    margin:"10px",
                    height:"auto",
                    width:"300px",
                    background:"#ffffff",
                    border:"2px solid",
                    }
    const passStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    margin:"10px",
                    height:"auto",
                    width:"300px",
                    background:"#ffffff",
                    border:"2px solid #000000"
                    }
  const submitStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    paddingTop:"0",
                    fontVariant:"small-caps",
                    margin:"25px",
                    height:"50px",
                    width:"100px",
                    border:"1px solid",
                    background:"#ffffff",
                    boxShadow:"1px 2px 10px #000000",
                  }
const greetingStyle={
                    fontFamily:"PT Sans",
                    fontSize:"3.5em",
                    paddingTop:"0",
                    fontVariant:"small-caps",
                    margin:"25px",
                    height:"100px",
                    width:"auto",
                    justifyContent:"center"
                    }
    const infoStyle={
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                    }
    return (
      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>
        <NavBar/>
        <main style={mainStyle}>
        <div style={greetingStyle}> Welcome Back!
        </div>
        <div style={infoStyle}>
          <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmail} style={emailStyle}/>
          <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePassword} style={passStyle}/>
          <input type="submit" style={submitStyle} onTouchTap={this.storeSignIn}/>
        </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
