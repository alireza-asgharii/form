import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing";
import styled from "styled-components";
import Register from "./Register";
import Login from "./Login";
import LoadingBar from "react-top-loading-bar";

//Styled-components
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eaf6f6;

  @media screen and (max-width: 500px) {
    height: auto;
    margin-top: 40px;
  }
`;

const Shape = styled.div`
  z-index: 1;
  width: 150px;
  height: 100px;
  position: absolute;
  background: blue;
  border-radius: 20px 50px 4px 10px;
  top: 470px;
  left: 50%;
  box-shadow: -10px 20px 8px 20px #4265d7af;
  z-index: 1;
  opacity: 0.6;

  @media screen and (max-width: 390px) {
    display: none;
  }
  @media screen and (min-width: 999px) {
    top: 100px;
    left: 70%;
    width: 250px;
    height: 300px;
    opacity: 0.4;
  }
  @media screen and (min-width: 1300px) {
    display: none;
  }
`;

const Main = () => {
  const [progress, setProgress] = useState(0)
  
  return (
    <Div onLoad={() => setProgress(100)}>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Shape></Shape>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate />} />
      </Routes>
    </Div>
  );
};

export default Main;
