import React from 'react';
import { Link } from 'react-router-dom'; 
import ReactDOM from "react-dom";
import './components/styles.css';
import { useAuthContext } from './AuthService';
import { useSelector } from 'react-redux'; 
import { useAppDispatch } from './store';
import { logoutUser } from './store/auth/actionCreators';

const UserProfile = () => {
  // const user = useSelector((state) => state.auth.profileData.profile);

  const dispatch = useAppDispatch();
  const user = useSelector((state) => state.auth.profileData.profile) || {
    name: 'Марія',
    surname: 'Андрусишин',
    phoneNumber: '123-456-7890',
    email: 'temporary@example.com',

  };

   if (!user) {
     return <div>Будь ласка ввійдіть щоб переглянути ваш профіль</div>;
   }

  
  return (
    <div >
      <div className="row nav-logout" style={{ display: 'flex', flexDirection: 'row'} }>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
          <div className="row"  style={{ display: 'flex', flexDirection: 'row', width:'100%' } }>
            <div className="col" style={{ paddingTop:'15px', width:'50%', textAlign:'left', paddingLeft:'40px'}}>
              <img src="star1.png" alt="star" width="270" height="75" />
            </div>
          
            <div className="col" style={{padding:'25px', width:'40%'}}>
                <input class="form-control me-2" type="text" style={{borderRadius:'12px', height:'28px'}} placeholder="пошук посилки.."/>
                <Link to="/" className="button" style={{height:'18px'}} onClick={() => dispatch(logoutUser())} >Вихід</Link>
            </div>
            <div className='col'style={{padding:'25px', width:'10%'}}>
                <img   src="support.png" alt="star" width="70" height="60"   style={{borderRadius:'100px'}} ></img>
              </div>
            
          </div>
        </nav>
     </div>
      
     <div className="row d-flex justify-content-center" style={{ display: 'flex', flexDirection: 'row' } }>
        <div className="vertical-menu">
        <Link to="/myprofile" className="menu-item" style={{background:'lightgray'}}>
            Мій профіль
          </Link>
          <Link to="/orders" className="menu-item">
            Мої замовлення
          </Link>
          <Link to="/createdOrder" className="menu-item">
            Створити посилку
          </Link>
          <Link to="#" className="menu-item">
            Архівовані
          </Link>
          <Link to="#" className="menu-item">
            Видалені
          </Link>
          <Link to="#" className="menu-item">
            Грошові перекази
          </Link>
        </div>
          <div className="col user-profile " style={{  } }>
            <div>
              <img src="userfoto.png" alt="timer" className="rounded-image" style={{width:'90px', height:'100px'}} />
            </div>
            <h3>ТВІЙ ПРОФІЛЬ </h3>
            <div>
                <h4>{user.name} {user.surname}</h4>
            </div>
            <div>
                <strong>Номер телефону:</strong> {user.phoneNumber}
              </div>
              <br/>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
          </div>

     </div>
    </div>
      )
};

export default UserProfile;
