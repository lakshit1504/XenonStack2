import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Internships from './pages/internship';
import Home from './pages/home';
import { AuthContext } from './context/auth-context';
import { useAuth } from './hooks/auth-hook';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';

import './App.css'
import Contact from './components/Contact';

const App = () => {

  const { login, logout, token, userId} = useAuth();

  return (
    <Router>
       <Navbar />
      <AuthContext.Provider value={{ token: token, userId: userId, login: login, logout: logout }}>
        <Routes>
          {token && <Route path='/auth' element={<Navigate replace to="/products" />} />}
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Internships />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App