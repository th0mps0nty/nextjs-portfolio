import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/shared/SuperComponent';

class Index extends SuperComponent {
  constructor() {
    debugger;
    super();
    debugger;
    this.state = {
      title: 'I am Index Page'
    };

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateTitle = () => {
    this.setState({ title: 'I am updated Index Page' });
  };

  render() {
    console.log('render');

    return (
      <BaseLayout>
        <h1 className='fromPage'>I am index page from Class Component</h1>
        <h2> {this.state.title} </h2>
        <button onClick={() => this.updateTitle()}> Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;

// Sending Props (props.children renders in Header.js as props)
// <Header title={'I am a header Component'}>
//   <h1> I am header subtitle </h1>
// </Header>
