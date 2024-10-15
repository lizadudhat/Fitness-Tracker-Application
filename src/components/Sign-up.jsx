import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, password, confirmPassword } = form;
 
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }

   
    setError(''); 
    console.log('Form Submitted', form);
    
  
    navigate('/dashboard'); 
    

    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <h3>Sign Up</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block mt-3"style={{backgroundColor:"#2dc9d7"}}>Sign Up</button>
        <a
          className="nav-link"
          href="/login"
          style={{ color: "black", paddingLeft: "40px", marginTop: "10px" }}
        >
          <center>
            Not a member? <a style={{ color: "blue" }}>Login</a>
          </center>
        </a>
      </form>
    </div>
  );
};

export default Signup;
