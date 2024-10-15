import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      
      navigate('/dashboard'); 
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <h3>Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn  mt-3"style={{backgroundColor:"#2dc9d7"}}>
          Login
        </button>

        <a
          className="nav-link"
          href="/signup"
          style={{ color: "black", paddingLeft: "40px", marginTop: "10px" }}
        >
          <center>
            Not a member? <a style={{ color: "blue" }}>Sign up</a>
          </center>
        </a>
       
      </form>
    </div>
  );
};

export default Login;
