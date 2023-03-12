import React, { useState } from 'react';
import './RegisterForm.css';
import { TextField, Button } from '@mui/material';
import {auth } from '../../../services/auth';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import instance from '../../../services/axios-firebase';



function RegisterForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [firm, setFirm] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFirmChange = (event) => {
    setFirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Set user's display name to name and surname
        userCredential.user.updateProfile({
          displayName: `${name} ${surname}`
        });
  
        // Send user data to server
        const userData = {
          email: email,
          name: name,
          surname: surname,
          phone: phone,
          firm: firm
        };
        instance.post('./users.json', userData)
          .then((response) => {
            console.log('User created successfully');
          })
          .catch((error) => {
            console.error('Error creating user', error);
          });
      })
      .catch((error) => {
        console.error('Error creating user', error);
      });
  };
  
  
  

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Kayıt Ol</h2>
        <div className="form-group">
          <TextField label="Ad" variant="outlined" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <TextField label="Soyad" variant="outlined" value={surname} onChange={handleSurnameChange} />
        </div>
        <div className="form-group">
          <TextField label="Email" variant="outlined" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <TextField label="Parola" variant="outlined" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <TextField label="Telefon" variant="outlined" value={phone} onChange={handlePhoneChange} />
        </div>
        <div className="form-group">
          <TextField label="Firma Adı" variant="outlined" value={firm} onChange={handleFirmChange} />
        </div>
        <Button variant="contained" color="primary" type="submit">Kayıt Ol</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
