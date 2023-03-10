import React, { useState } from 'react';
import './LoginForm.css';
import { Button } from '@mui/material';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Remember me: ${rememberMe}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Giriş Yap</h2>
      <div className="form-group">
        <label htmlFor="email">Email Adresi</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Parola</label>
        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
        <label className="form-check-label" htmlFor="rememberMe">Beni Hatırla</label>
      </div>
      <div style={{"display" : "flex", "justifyContent":"center"}}>
        <Button className="btn btn-primary">Giriş Yap</Button>
        <Button color='secondary'>Kayıt Ol</Button>
      </div>

    </form>
  );
}

export default LoginForm;
