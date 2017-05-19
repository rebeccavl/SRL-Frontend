/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

export default class Home extends React.PureComponent {
  render() {
  const box1={
              height:"520px",
              width:"auto",
              background:"#bdbec0",
              borderRadius:"0% 0% 0% 20%"
              }
  const box2={
              height:"500px",
              width:"auto",
              background:"#0784f9",
              borderRadius:"0% 0% 0% 50%"
              }
  const box3={
              height:"500px",
              width:"auto",
              display:"flex",
              flexDirection:"row"
              }
const infobox1={
                height:"300px",
                width:"300px",
                background:"#000000",
                margin:"10%"
                }
const infobox2={
                height:"300px",
                width:"300px",
                background:"#000000",
                margin:"10%"
                }
const infobox3={
                height:"300px",
                width:"300px",
                background:"#000000",
                margin:"10%"
                }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <NavBar/>
        <div style={box1}>
          <div style={box2}>
          </div>
        <div style={box3}>
          <div style={infobox1}></div>
          <div style={infobox2}></div>
          <div style={infobox3}></div>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
