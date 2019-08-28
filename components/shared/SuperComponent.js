import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';

export default class SuperComponent extends Component {
  constructor() {
    super();

    this.someVariable = 'just some variable';
  }

  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <BaseLayout>
        <h1> I am SuperComponent </h1>
      </BaseLayout>
    );
  }
}
