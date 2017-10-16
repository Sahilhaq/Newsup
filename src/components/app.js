import React, { Component } from 'react';

import NewsMain from './news_main';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>  
    );
  }
}
