import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { loginUser } from './store/auth/actionCreators';

function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({name,surname, email, newPassword, phone_number }));
  };

  return (
    <div className='login-position'>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <h2>Реєстрація на сайті JOSKA DELIVERY</h2>
          <div>
            <label htmlFor="name">Ім'я :</label><br />
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
             required style={{ width: '300px', height: '22px' }} /><br /><br />
          </div>
          <div>
            <label htmlFor="surname">Прізвище :</label><br />
            <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}
             required style={{ width: '300px', height: '22px' }} /><br /><br />
          </div>
          <div>
            <label htmlFor="email">Електронна адреса:</label><br />
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
             required style={{ width: '300px', height: '22px' }} /><br /><br />
          </div>
          <div>
            <label htmlFor="phone_number">Номер телефону :</label><br />
            <input type="text" id="phone_number" name="phone_number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}
             required style={{ width: '300px', height: '22px' }} /><br /><br />
          </div>
          <div>
            <label htmlFor="new-password">Пароль:</label><br />
            <input type="password" id="new-password" name="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
            required style={{ width: '300px', height: '22px' }} /><br /><br />
          </div>
          <div>
          <button type="submit" className='button' style={{height:'33px', width:'200px'}}>Зареєструватися</button>
          <p>Вже маєте обліковий запис? <Link to="/login" className='button' style={{height:'20px'}}>Увійти</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;