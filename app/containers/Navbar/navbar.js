import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // static propTypes = {
  //   children: React.PropTypes.node,
  // };

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
