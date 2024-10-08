import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addRecruiter } from '../../services/RecruiterService';
import { addFreelancer } from '../../services/FreelancerService';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      const { role, userName, firstName, lastName, password } = data;
      const user = { userName, firstName, lastName, password };

      if (role === 'recruiter') {
        const response = await addRecruiter(user);
        if (response.success) {
          alert('Recruiter registered successfully');
        } else {
          setError('userName', { type: 'manual', message: response.message });
        }
      } else if (role === 'freelancer') {
        const response = await addFreelancer(user);
        if (response.success) {
          alert('Freelancer registered successfully');
        } else {
          setError('userName', { type: 'manual', message: response.message });
        }
      }

      navigate('/login'); 
    } catch (error) {
      console.error(error);
      setError('userName', { type: 'manual', message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
              placeholder="Enter your username"
              {...register('userName', { required: 'Please enter your username.' })}
            />
            <div className="invalid-feedback">{errors.userName?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First&nbsp;Name</label>
            <input
              type="text"
              id="firstName"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              placeholder="Enter your first name"
              {...register('firstName', { required: 'Please enter your first name.' })}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last&nbsp;Name</label>
            <input
              type="text"
              id="lastName"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              placeholder="Enter your last name"
              {...register('lastName', { required: 'Please enter your last name.' })}
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>
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
              <option value="recruiter">Recruiter</option>
              <option value="freelancer">Freelancer</option>
            </select>
            <div className="invalid-feedback">{errors.role?.message}</div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-success">Sign Up</button>
            <button type="reset" className="btn btn-dark">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
