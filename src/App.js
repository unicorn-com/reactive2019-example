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
  let style = Object.assign({},BoxStyle,{backgroundColor});

  return <div style={style}>{text}<br/>{screenSize}</div>
}

function App() {
  return (
    <div className="App">
      <ScreenSizeProvider>
        <Box color="red">Box 1</Box>
        <Box color={"blue"}>Box 2</Box>
        <Box/>
      </ScreenSizeProvider>
    </div>
  );
}

export default App;
