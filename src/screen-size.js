import React, {createContext, useEffect, useState, useContext} from "react";

//define screen sizes (Bootstrap)
export const ScreenSizeMap = {
    xl: 1200,
    l:  992,
    m:  768,
    s:  576,
    xs: 0
};

//create context
export const ScreenSizeContext = createContext(_getScreenSize());

//create root screensize component with state and provider
//export const ScreenSizeProvider = (props) => {
//  let screenSize = useGetScreenSize();
//  return (
//    <ScreenSizeContext.Provider value={screenSize}>
//      {props.children}
//    </ScreenSizeContext.Provider>
//  )
//};

//custom hook
export function useScreenSize() {
  let [screenSize, setScreenSize] = useState(_getScreenSize());

  useEffect(()=>{
    function setNewScreenSize() {
      let nss = _getScreenSize();
      if (nss !== screenSize) {
        console.log(`Changing screenSize from "${screenSize}" to "${nss}".`);
        setScreenSize(nss);
      }
    }

    console.log("Effect - register listeners");
    window.addEventListener("resize",setNewScreenSize);
    window.addEventListener("orientationchange", setNewScreenSize);

    return (() => {
      console.log("Effect - unregister listeners");
      window.removeEventListener("resize",setNewScreenSize);
      window.removeEventListener("orientationchange", setNewScreenSize);
    });
  },[screenSize]);
  return screenSize;
}

//custom hook
//export function useScreenSize() {
//  return useContext(ScreenSizeContext);
//}

//helper function to get screenSize
function _getScreenSize(element = window) {
  let result = "xs";
  let screenWidth = element.innerWidth || element.clientWidth;

  if (screenWidth >= ScreenSizeMap.xl)
    result = "xl";
  else if (screenWidth >= ScreenSizeMap.l)
    result = "l";
  else if (screenWidth >= ScreenSizeMap.m)
    result = "m";
  else if (screenWidth >= ScreenSizeMap.s)
    result = "s";

  return result;
}


