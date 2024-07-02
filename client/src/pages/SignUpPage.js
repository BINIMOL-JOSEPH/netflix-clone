import React, { useState } from 'react';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import styled from 'styled-components';
import { firebaseAuth } from '../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
 
const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  }); 

  const navigate = useNavigate();

  const handleSignUp = async() => {
    try {
      const{email, password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch(error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setFormValues({
      ...formValues, email : e.target.value
    });
  }

  const handlePasswordChange = (e) => {
    setFormValues({
      ...formValues, password : e.target.value
    });
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/')
  })


  return (
    <Container>
      <BackgroundImage />
      <div className='content'>
        <Header login/>
        <div className='body'>
          <div className='text'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership</h6>
          </div>
          <div className='form'>
            {showPassword ? (
              <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={handlePasswordChange} />
            ) : (
              <input type="email" placeholder="Email address" name="email" value={formValues.email} onChange={handleEmailChange} />
            )}
            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button onClick={handleSignUp}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
  }
  .text{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    color: white;
  }
  h1{
    padding: 0rem 25rem;
  }
  h4, h6{
    margin-top: 1.25rem;
  }
  .form{
    display: grid;
    justify-content: center;
    width: 60%;
    margin-top: 2rem;
    grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
    input{
      color: white;
      background: #333;
      width: 45rem;
      height: 50px;
      padding: 1rem;
      font-size: 1rem;
      border: 0;
      outline: none;
      &:focus {
        outline: none;
      }
    }
    button{
      padding: 0.5rem 1rem;
      background-color: red;
      font-weight: bold;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      width: 10rem;
      color: white;
    }
  }
`

export default SignUpPage