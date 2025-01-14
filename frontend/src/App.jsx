import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Signup from './components/Signup';
import FormCreate from './components/FormCreate';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<h1>Bem vindo ao sistema</h1>}/>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<FormCreate />} />
      {/* <GlobalStyle/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/> */}
    </Routes>
  </Router>
  
);

export default App;
