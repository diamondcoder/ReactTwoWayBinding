import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import Validation from './ValidationComponent';
import Char from './ChartComponent';

class App extends Component {

  state= {
    statename:"Guest",
    len:2
  };

  changeUsernnameHandler=(event)=>{
    this.setState({statename : event.target.value });
    this.setState({len:event.target.value.length});
    /*let len=event.target.value.length;
    return len;*/

  }

  deleteHandler=(index) =>{
    const text = this.state.statename.split('');
    text.splice(index,1);
    const updatedText=text.join('');
    this.setState({ statename:updatedText });

  }
  render() {

  const charList= this.state.statename.split('').map((ch,index) => {
    return <Char character={ch} key={index} clicked={()=>this.deleteHandler(index)} />
  });

    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">React Exercise</h1>
        </header>
        <p className="App-intro">
           A simple two way binding
        </p>


        <UserOutput username={this.state.statename}  />
        <Validation len={this.state.len}/>
          <UserInput changed={this.changeUsernnameHandler}  username={this.state.statename} />
          Click any character to delete it
          {charList}
      </div>
    );
  }
}

export default App;
