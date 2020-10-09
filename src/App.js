import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Comment from './Components/Comment';

function App() {
  return (
    <div className="App">
      {/*<Welcome lastName= "baris"/>
      */}
      {/* HOW CAN I REACH COMMENT.PROPS WITHOUT "comment ELEMENT"  */}
      <Comment  />
    </div>
  );
}

export default App;
