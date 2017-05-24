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
                  flexDirection:"column",
                  alignItems:"center"
                  }
    const column1={
                  height:"100px",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
    const column2={
                  height:"200px",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
    const column3={
                  height:"200px",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  }
   const column4={
                  height:"200px",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  margin:"40px",
                  }
    const column5={
                  height:"200px",
                  width:"auto",
                  display:"flex",
                  flexDirection:"column",
                  margin:"40px"
                  }
      const box1={
                  height:"300px",
                  width:"auto",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000",
                  display:"flex",
                  flexDirection:"row",
                  }
      const box2={
                  height:"300px",
                  width:"auto",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000",
                  display:"flex",
                  flexDirection:"row"
                  }
      const box3={
                  height:"300px",
                  width:"auto",
                  margin:"10%",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000",
                  display:"flex",
                  flexDirection:"row",
                  }
      const box4={
                  height:"300px",
                  width:"auto",
                  margin:"10%",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000",
                  display:"flex",
                  flexDirection:"row",
                  }
      const list1={
                  fontFamily:"PT Sans",
                  fontSize:"2em",
                  }
     const button={
                  height:"40px",
                  width:"75px",
                  background:"#ffffff",
                  paddingTop:"15px",
                  paddingLeft:"15px",
                  margin:"5px 10% 5px 5px",
                  fontFamily:"PT Sans",
                  fontSize:"1em",
                  color:"#000000",
                  alignContent:"space-between",
                  border:" solid 1pt #000000"
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
            <div style={list1}>Categories</div>
            <div style={box1}>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
            </div>
          </div>
          <div style={column3}>
            <div style={list1}>Products</div>
            <div style={box2}>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
              <div style={boxlist}></div>
            </div>
          </div>
          <div style={column4}>
            <div style={list1}>Edit a Category or Product</div>
            <div style={box3}>
              <Link style={button} to= "/editCategory"> Category </Link>
              <Link style={button} to= "/editProduct"> Product </Link>
            </div>
          </div>
          <div style={column5}>
            <div style={list1}>Add a New Category or Product</div>
            <div style={box4}>
              <Link style={button} to= "/newCategory"> Category </Link>
              <Link style={button} to= "/newProduct"> Product </Link>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
