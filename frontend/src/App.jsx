import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<h1>Bem vindo ao sistema</h1>}/>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
