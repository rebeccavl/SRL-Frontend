/*
 *
 * StoreDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

export default class StoreDashboard extends React.PureComponent {
  render() {
  const mainStyle={
                  display:"flex",
                  flexDirection:"column"
                  }
    const column1={
                  height:"20%",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
    const column2={
                  height:"20%",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
    const column3={
                  height:"20%",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
  const column4={
                  height:"20%",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
    const column5={
                  height:"20%",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
      const box1={
                  height:"300px",
                  width:"auto",
                  margin:"10%",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000"
                  }
      const box2={
                  height:"300px",
                  width:"auto",
                  margin:"10%",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000"
                  }
      const box3={
                  height:"300px",
                  width:"auto",
                  margin:"10%",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000"
                  }
      const box4={
                  height:"300px",
                  width:"auto",
                  margin:"10%",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000"
                  }
      const list1={
                  display:"flex",
                  flexDirection:"row",
                  }
      const list2={

                  }
    const boxlist={
                  display:"flex",
                  flexDirection:"row",
                  border:"2px solid",
                  height:"100px",
                  width:"100px",
                  margin:"10px"
                  }
    return (
      <div>
        <Helmet title="StoreDashboard" meta={[ { name: 'description', content: 'Description of StoreDashboard' }]}/>
        <NavBar/>
        <main style={mainStyle}>
          <div style={column1}>
          </div>
          <div style={column2}>
            <div style={box1}>Categories</div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>

          </div>
          <div style={column3}>Products
            <div style={box2}></div>
          </div>
          <div style={column4}>
            <div style={box3}>Edit a Category or Product</div>
          </div>
          <div style={column5}>
            <div style={box4}>Add a New Category or Product</div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
