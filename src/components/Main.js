import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Landing';
import styled from 'styled-components';

//Styled-components
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #EAF6F6;
`

const Main = () => {
  return (
    <Div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/*' element={<Navigate />} />
      </Routes>
    </Div>
  );
};

export default Main;