/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
export default class SignUp extends React.PureComponent {

constructor (props){
  super(props);
  this.state={
    username:"",
    email:"",
    password:""
  }
}
 handleUsername = (event) => {
   this.setState({
     username:event.target.value
   })
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

 storeSignUp = () => {
   var data = new FormData();
   data.append("username",this.state.username);
   data.append("email",this.state.email);
   data.append("password",this.state.password);
   fetch("http://thathashimottoslife.com/api/SignUp", {
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
     else if (json.success) {
       this.setState({
         clicked:true
       })
       alert(json.success);
     }
   }.bind(this))
 }


  render() {
    const mainStyle={
                    display:"flex",
                    flexDirection:"column",
                    height:"800px",
                    alignItems:"center"
                    }
    const userStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    margin:"30px",
                    height:"auto",
                    width:"250px",
                    background:"#ffffff",
                    border:"2px solid",
                    }
    const passStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    margin:"30px",
                    height:"auto",
                    width:"250px",
                    background:"#ffffff",
                    border:"2px solid #000000"
                    }
    const emailStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    paddingTop:"0",
                    margin:"30px",
                    height:"auto",
                    width:"250px",
                    background:"#ffffff",
                    border:"2px solid #000000"
                    }
  const submitStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    paddingTop:"0",
                    fontVariant:"small-caps",
                    margin:"30px",
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
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>
        <NavBar page="SignUp"/>
        <main style={mainStyle}>
        <div style={greetingStyle}> Glad to have you on board!
        </div>
        <div style={infoStyle}>
          <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsername} style={userStyle}/>
          <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePassword} style={passStyle}/>
          <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmail} style={emailStyle}/>
          <input type="submit" style={submitStyle} onTouchTap={this.storeSignUp}/>
        </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
