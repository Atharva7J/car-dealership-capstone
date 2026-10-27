import React, { useState } from 'react';
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    // Registration logic handling submission
    alert(`User ${userName} registered successfully!`);
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={register}>
        <div className="form-group">
          <label>Username</label>
          type="text" 
          <input 
            type="text" 
            className="form-control" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            placeholder="Enter Username" 
            required 
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="Enter First Name" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Enter Last Name" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter Email" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Password" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
    </div>
  );
};

export default Register;
