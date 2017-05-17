/*
 *
 * CategoryContainer
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

export default class Category extends React.PureComponent {

  render() {
    return (
      <div>
        <Helmet title="CategoryContainer" meta={[ { name: 'description', content: 'Description of CategoryContainer' }]}/>
        <NavBar/>
        <Footer/>
      </div>
    );
  }
}
