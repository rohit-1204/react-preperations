import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
    console.log('Constructor: Component is being constructed');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted');
    // Simulate a data fetch
    setTimeout(() => {
      this.setState({ data: 'Hello, world!', loading: false });
      console.log('Data fetched and state updated');
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component update?');
    // Prevent re-render if data hasn't changed
    return nextState.data !== this.state.data;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component did update');
    if (prevState.data !== this.state.data) {
      console.log('Data has changed');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>React Lifecycle Example</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <p>Data: {this.state.data}</p>
        )}
      </div>
    );
  }
}

export default LifecycleComponent;
