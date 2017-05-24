/*
 *
 * NewCategory
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class NewCategory extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="NewCategory" meta={[ { name: 'description', content: 'Description of NewCategory' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
