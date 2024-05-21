/*import React, {useState} from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


//import Header from '../componenets/Header';
//import BackgroundImage from '../componenets/BackgroundImage';
import styled from 'styled-components';
import {firebaseAuth} from '../utils/firebase-config'
import BackgroundImage from '../componenets/BackgroundImage';
import Header from '../componenets/Header'


const LoginPage = () => {

const [email, setemail] = useState("");
const [password, setpassword] = useState("");

const navigate=useNavigate()

const handleLogin=async()=>{
try{
  await signInWithEmailAndPassword(firebaseAuth,email,password)
}catch(error){
console.log(error)
}
}
onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser){navigate('/')}
})
*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../componenets/BackgroundImage';
import Header from '../componenets/Header'


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <Wrapper>
    <BackgroundImage/>
<div className='loginContent'>
<Header/>
  <div className='form-wrapper'>
  <div className='form'>
    <div className='title'>
      <h1>login</h1>
    </div>
    <div className='container'>
    <input type='text' placeholder='Email'  
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
    <input type='password' placeholder='Password' 
     onChange={(e)=>setPassword(e.target.value)}
     value={password}
    />
    <button onClick={handleLogin}>login</button>

    </div>
  </div>
  </div>
</div>

   </Wrapper>


  )
}

const Wrapper=styled.div`
position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
  }
  .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color: rgba(0, 0, 0, 0.69);
      height: 50vh;
      padding: 2rem;
      color: white;
      border-radius: 0.4rem;

      .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input {
          border-radius: 0.4rem;
          padding: 0.5rem 1rem;
          width: 25rem;
          height: 3.4;
          outline: none;
        }
        button {
          padding: 0.5rem;
          background-color:#23013f ;
          box-shadow: 0 0 0.2rem white; /* Adjust the size of the shadow as needed */

          border: none;
          cursor: pointer;
          border-radius: 0.4rem;
          height: 3.4rem;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  }
`

export default LoginPage;