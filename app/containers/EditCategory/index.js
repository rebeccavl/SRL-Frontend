/*
 *
 * EditCategory
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class EditCategory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      categories: []
    };
  }
  componentWillMount(){
    fetch('http://localhost:8000/api/getCategories')
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      this.setState({
        categories:json
      })
    }.bind(this))
  }

  handleChange = (event,index,value) =>
    this.setState({value});

  handleCatergoryName = (event) => {
    this.setState({
      categoryName:event.target.value
    })
  };

  handleImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  };

  render() {

    const mainStyle={
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                    }
    const editName={
                    height:"20px",
                    width:"auto",
                    fontFamily:"PT Sans",
                    fontSize:"1.5em",
                    color:"#000000",
                    paddingTop:"30px"
                    }
    const editPic={
                    height:"20px",
                    width:"auto",
                    fontFamily:"PT Sans",
                    fontSize:"1.5em",
                    color:"#000000",
                    paddingTop:"30px"
                    }
    const editDesc={
                    height:"20px",
                    width:"auto",
                    fontFamily:"PT Sans",
                    fontSize:"1.5em",
                    color:"#000000",
                    paddingTop:"30px"
                    }
    const changebox={
                    display:"flex",
                    flexDirection:"flexDirection",
                    alignItems:"center"
                    }
  const selectStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    margin:"10px",
                    height:"auto",
                    width:"300px",
                    background:"#ffffff",
                    border:"2px solid",
                    }
    const fillStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    margin:"10px",
                    height:"auto",
                    width:"300px",
                    background:"#ffffff",
                    border:"2px solid",
                    margin:"30px"
                    }
    const fileStyle={
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    paddingTop:"0",
                    fontVariant:"small-caps",
                    margin:"30px",
                    height:"auto",
                    width:"300px",
                    background:"#ffffff",
                    }
const previewStyle={
                    width:"100px",
                    height:"100px",
                    margin:"30px",
                    fontFamily:"PT Sans",
                    fontSize:"1em",
                    }
    return (
      <div>
        <Helmet title="EditCategory" meta={[ { name: 'description', content: 'Description of EditCategory' }]}/>
        <NavBar/>
        <main style={mainStyle}>
          <div style={editName}> Edit Category Name </div>
          <div style={changebox}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {this.state.categories.map((category,index) =>(
                <MenuItem value={category.id} primaryText={category.category} style={fillStyle}/>
              ))}
            </DropDownMenu>
            <input type="text" placeholder="new category name" value={this.state.categoryName} onChange={this.handleCatergoryName} style={fillStyle}/>
          </div>
          <div style={editPic}> Edit Category Picture </div>
          <div style={changebox}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {this.state.categories.map((category,index) =>(
                <MenuItem value={category.id} primaryText={category.image} style={fillStyle}/>
              ))}
            </DropDownMenu>
            <input type="file" onChange={this.handleImage} style={fileStyle}/>
            <img style={previewStyle} src={this.state.preview}/>
          </div>
          <div style={editDesc}> Edit Category Description </div>
          <div style={changebox}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {this.state.categories.map((category,index) =>(
                <MenuItem value={category.id} primaryText={category.image} style={fillStyle}/>
              ))}
            </DropDownMenu>
            <textarea placeholder="description" value={this.state.description} onCHnage={this.handleDesc} style={previewStyle}/>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
