/*
 *
 * NewProduct
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class NewProduct extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="NewProduct" meta={[ { name: 'description', content: 'Description of NewProduct' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
