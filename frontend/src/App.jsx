import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import FormCreate from './components/FormCreate';
import Menu from './components/Menu';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<FormCreate />} />
    </Routes>
  </Router>
  
);

export default App;
