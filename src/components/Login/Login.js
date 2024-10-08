import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you have appropriate styles

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const { role, loginId, password } = data;
      let endpoint = '';

      switch (role) {
        case '1':
          endpoint = 'http://localhost:8080/admin/login';
          break;
        case '2':
          endpoint = 'http://localhost:8080/recruiter/login';
          break;
        case '3':
          endpoint = 'http://localhost:8080/freelancer/login';
          break;
        default:
          throw new Error('Invalid role selected');
      }

      const response = await axios.post(endpoint, { loginId, password });

      if (response.data.valid) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem(`${role}UName`, loginId);
        localStorage.setItem(`${role}Id`, response.data.id);
        navigate(`/${role === '1' ? 'admin' : role === '2' ? 'recruiter' : 'freelancer'}`);
      } else {
        setError('password', { type: 'manual', message: 'Invalid Login Details!' });
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        if (err.response.status === 400) {
          setError('loginId', { type: 'manual', message: err.response.data.message || 'Invalid login ID' });
        } else if (err.response.status === 401) {
          setError('password', { type: 'manual', message: 'Unauthorized access. Please check your credentials.' });
        } else {
          setError('password', { type: 'manual', message: 'An error occurred. Please try again later.' });
        }
      } else {
        setError('password', { type: 'manual', message: 'Network error. Please check your connection.' });
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Login to Your Account</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-group">
            <label htmlFor="loginId">Username</label>
            <input
              type="text"
              id="loginId"
              className={`form-control ${errors.loginId ? 'is-invalid' : ''}`}
              placeholder="Enter your username"
              {...register('loginId', { required: 'Please enter your username.' })}
            />
            <div className="invalid-feedback">{errors.loginId?.message}</div>
          </div>
          <div className="form-group">
            <label htmlFor="passwordField">Password</label>
            <input
              type="password"
              id="passwordField"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Enter your password"
              {...register('password', { required: 'Please enter your password.' })}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-group">
            <label htmlFor="userRole">Select&nbsp;Role</label>
            <select
              id="userRole"
              className={`form-select ${errors.role ? 'is-invalid' : ''}`}
              {...register('role', { required: 'Please choose a role.' })}
            >
              <option value="">Select Role</option>
              <option value="1">Admin</option>
              <option value="2">Recruiter</option>
              <option value="3">Freelancer</option>
            </select>
            <div className="invalid-feedback">{errors.role?.message}</div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">Login</button>
            <button type="reset" className="btn btn-dark">Reset</button>
          </div>
          <div className="form-footer">
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
            <p className="signup-prompt">Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
