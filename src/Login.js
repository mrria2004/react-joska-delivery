import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './components/styles.css';
import { useAppDispatch } from './store';
import { useDispatch } from 'react-redux';
import { loginUser } from './store/auth/actionCreators';
import { loginStart, loginSuccess } from './store/auth/authReducer'; // Вам можливо доведеться змінити шлях відповідно до вашого проекту
import { useAuth } from './AuthService';
import {  useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Тимчасовий користувач
  const temporaryUser = {
    name: 'Ім\'я користувача',
    phoneNumber: '123-456-7890',
    emailAddress: 'user@example.com',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({email, password}));

    navigate('/myprofile');
  };

 

  return (
    <div className='login-position'>
      <form onSubmit={handleSubmit}>
        <div className="login" style={{height:'400px'}}>
        <h3>Увійдіть у  JOSKA DELIVERY</h3>
          <div>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} 
            required style={{width:'300px', height:'22px'}} /> <br/><br/>
          </div>
          <div>
            <label htmlFor="password">Пароль:</label><br/>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} 
            required style={{width:'300px', height:'22px'}} /><br/><br/>
          </div>
           <div>
                <button className='button' style={{height:'33px'}}>Увійти</button>
             <p>Не маєте облікового запису? <Link to="/register" className='button' style={{height:'20px'}} >Зареєструватися</Link></p>
           </div>
           {/* <Link to="/myprofile" className='button'>Увійти</Link> */}
        </div>
        
      </form>
      
      {/* <div className="login">
        <h2>Ласкаво просимо до JOSKA DELIVERY</h2>
        <form>
          <label for="username">Ім'я користувача:</label><br/>
          <input type="text" id="username" name="username" required style={{width:'300px', height:'22px'}}></input><br/><br/>
          <label for="password">Пароль:</label><br/>
          <input type="password" id="password" name="password" required style={{width:'300px', height:'22px'}}></input><br/><br/>
          {/* <button type="button">Увійти</button> 
          {/* <Link to="/myprofile" className='button'>Увійти</Link> */}
        {/* </form>  */}

        
     {/* </div> */}
  </div>
  );
}

export default Login;
