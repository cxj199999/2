import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        c 
        <Child msg="傅川子"></Child>
      </div>
    );
  }
}

function Child(props){
  console.log(props);
  return <div>自组建</div>
}

export default App;

