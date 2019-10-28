import React from 'react';
import './App.css';
import {ScreenSizeProvider, useScreenSize} from "./screen-size.js";

const BoxStyle={
  height:"50px",
  width:"100%",
  textAlign:"center",
  border:"1px solid"
}

function Box(props) {
  let screenSize =  useScreenSize();
  let text = props.children || "Box"
  let backgroundColor = props.color || "white";
  let style = {...BoxStyle, backgroundColor};

  return <div style={style}>{text}<br/>{screenSize}</div>
}

function _generateBoxes(count) {
  let a = new Array(count);
  for(let i=0; i < count; i++) {
    a[i] = (<Box>{`Box ${i+1}`}</Box>);
  }
  return React.Children.toArray(a);
}

function App2() {
  return (
    <div className="App">
      {/**<ScreenSizeProvider>**/}
        <Box color="red">Box 1</Box>
        <Box color={"blue"}>Box 2</Box>
        <Box/>
      {/**</ScreenSizeProvider>**/}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {_generateBoxes(1000)}
    </div>
  );
}

export default App;
