/*
 *
 * SingleProduct
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SingleProduct extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="SingleProduct" meta={[ { name: 'description', content: 'Description of SingleProduct' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
