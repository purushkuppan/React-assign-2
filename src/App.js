import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/ValidationComponent';
import CharComp from './Validation/CharComponent';

class App extends Component {

    state = {
        textVal : ""
    }
    calculateLength = (event) => {
    this.setState({ textVal : event.target.value })

    }

  render() {

        let chararr = "";
        if (this.state.textVal) {
            console.log(this.state.textVal)
            chararr = ( <div> {
                this.state.textVal.map((p, index) => {
                  return  <CharComp inletter = {p} />
                })
            } </div>)
            }

    return (
        <div className="App">
          Enter your input <input type="text" onChange={(event) => this.calculateLength( event)}/>
            <p>Your Input Length : {this.state.length}</p>
            <Validation textVal={this.state.textVal}/>
            {chararr}

      </div>
    );
  }
}

export default App;
