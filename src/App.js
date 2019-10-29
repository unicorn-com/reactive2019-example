import React from 'react';
import './App.css';
import {ScreenSizeProvider, useScreenSize} from "./screen-size.js";

const BoxStyle={
  height:"48px",
  marginTop:"5px",
  marginLeft:"5%",
  width:"90%",
  textAlign:"center",
  border:"1px solid"
};

function Box(props) {
  let screenSize =  useScreenSize();
  let text = props.children || "Box"
  let backgroundColor = props.color || "white";
  let style = Object.assign({},BoxStyle,{backgroundColor});

  return <div style={style}>{text}<br/>{screenSize}</div>
}

function _generateBoxes(count) {
  let a = new Array(count);
  for(let i=0; i < count; i++) {
    a[i] = (<Box>{`Box ${i+1}`}</Box>);
  }
  return React.Children.toArray(a);
}

function App() {
  return (
    <div className="App">
      <ScreenSizeProvider>
      {_generateBoxes(1000)}
      </ScreenSizeProvider>
    </div>
  );
}

export default App;
