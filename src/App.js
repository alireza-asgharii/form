import React, { createContext, useEffect, useReducer, useState } from "react";
import Main from "./components/Main";
import LoadingBar from "react-top-loading-bar";

//context
export const loadingContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 20:
      return 20;
    case 100: 
      return 100;
    default:
      return state;
  }
}

const App = () => {
  const [progress, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch(100)
  }, [!progress])
  return (
    <div onLoad={() => dispatch(100)}>
      <loadingContext.Provider value={dispatch}>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => dispatch(0)}
        />
        <Main />
      </loadingContext.Provider>
    </div>
  );
};

export default App;
