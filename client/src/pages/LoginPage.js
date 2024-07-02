import React, { useState } from 'react';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import styled from 'styled-components';
import { firebaseAuth } from '../utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/')
  });

  return (
    <Wrapper>
      <BackgroundImage />
      <div className='loginContent'>
        <Header />
        <div className='form-wrapper'>
          <div className='form'>
            <div className='title'>
              <h1>Sign In</h1>
            </div>
            <div className='container'>
              <input type='text' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleLogIn}>Sign In</button>
            </div>
            <div className='form-help'>
              <div className='remember'>
                <input type='checkbox' />
                <label htmlFor=''>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
            {/* <div className='form-switch'>
              <p>New to Netflix ? <span>Sign Up Now</span></p>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  .loginContent{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    width: 100vw;
    height: 100vh;
  }
  .form-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 85vh;
  }
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: rgba(0,0,0,0.75);
    color: white;
    padding: 4rem;
    border-radius: 0.5rem;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input{
      color: white;
      background: #333;
      width: 100%;
      height: 50px;
      padding: 16px 20px;
      font-size: 1rem;
      border: 0;
      outline: none;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
    }
    button{
      background: #e50914;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      color: white;
      height: 50px;
      border-radius: 4px;
      font-weight: bold;
    }
  }
  .form-help {
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
    p, label {
      color: #b3b3b3;
    }
  }    
  .remember {
    display: flex;
    gap: 4px;
    input {
      width: 16px;
    }
  }
  .form-switch {
    margin-top: 15px;
    p {
      color: #737373;
    }
    span {
      font-weight: bold;
    }
  }

  @media(max-width: 570px) {
    .form{
      width: 85%;
      padding: 2rem;
    }
    input{
      width: 40%;
    }
  }

  @media(max-width: 400px) {
    .form-help {
      flex-direction: column;
    }
  }
`

export default LoginPage