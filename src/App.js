import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import WelcomeBox from "./WelcomeBox";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      
      <Navigation />
      
      <WelcomeBox />
      
      <Content/>

      
    </div>
  );
}

export default App;
