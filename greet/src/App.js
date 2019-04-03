import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={data:""
  }
  this.displayMessage=this.displayMessage.bind(this)

  
  };
  displayMessage(){
    var today=new Date()
    var curHr=today.getHours()
    if(curHr<12)
{
  this.setState({data:"Goodmorning thejaswi"})

}
else if(curHr<18){
  this.setState({data:"Goodafternnon thejaswi"})

}
else{
  this.setState({data:"Goodevening thejaswi"})

}  
}
  render() {
    return (
      <div className="App">
        <button onClick={this.displayMessage}>click</button>  
        <h1>{this.state.data}</h1>    
      </div>
    );
  }
}

export default App;
