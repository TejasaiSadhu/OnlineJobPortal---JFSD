import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';
import AdminRouting from './modules/Admin/AdminRouting';
import RecruiterRouting from './modules/Recruiter/RecruiterRouting';
import FreelancerRouting from './modules/Freelancer/FreelancerRouting';
import ResponsiveAppBar from './components/ResponsiveAppBar';

// Utility function to check login status
const checkLoginStatus = () => Boolean(localStorage.getItem('loggedIn'));

function App() {
  const [loggedIn, setLoggedIn] = useState(checkLoginStatus());
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(checkLoginStatus());
  }, []);

  const logOut = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <ResponsiveAppBar logOut={logOut} loggedIn={loggedIn} /> {/* Pass props */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} /> {/* Pass setLoggedIn to Login */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/*" element={<AdminRouting />} />
        <Route path="/recruiter/*" element={<RecruiterRouting />} />
        <Route path="/freelancer/*" element={<FreelancerRouting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
