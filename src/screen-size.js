import React, {createContext, useEffect, useState, useContext} from "react";

//define screen sizes
export const ScreenSizeMap = {
    xl: 1200,
    l:  992,
    m:  768,
    s:  576,
    xs: 0
};

//create context
const ScreenSizeContext = createContext(_getScreenSize());

<<<<<<< HEAD
//create root screenSize component with state and provider
=======
//create root screensize component with state and provider
>>>>>>> sprint
export const ScreenSizeProvider = ({children}) => {
  let screenSize = useGetScreenSize();
  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  )
};

//custom hook for components
export function useScreenSize() {
  return useContext(ScreenSizeContext);
}

//custom hook for provider
export function useGetScreenSize() {
  let [screenSize, setScreenSize] = useState(_getScreenSize());

  useEffect(()=>{
    function setNewScreenSize() {
      let nss = _getScreenSize();
      if (nss !== screenSize) {
        console.log(`Changing screenSize from "${screenSize}" to "${nss}".`);
        setScreenSize(nss);
      }
    }

    window.addEventListener("resize",setNewScreenSize);
    window.addEventListener("orientationchange", setNewScreenSize);

    return (() => {
      window.removeEventListener("resize",setNewScreenSize);
      window.removeEventListener("orientationchange", setNewScreenSize);
    });
  },[screenSize]);
  return screenSize;
}


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


