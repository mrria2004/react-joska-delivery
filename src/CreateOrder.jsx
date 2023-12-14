import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ReactDOM from "react-dom";
import './components/styles.css';
import { createOrder } from './api/create';
import { logoutUser } from './store/auth/actionCreators';
import { useAppDispatch } from './store';

function CreateOrder() {
    const dispatch = useAppDispatch();

    const [orderData, setOrderData] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        adress: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const createdOrder = await createOrder(orderData);
            console.log('Замовлення успішно створено:', createdOrder);

            setOrderData({
              id: '',
              title: '',
              description: '',
              price: '',
              adress: '',
            });
          } catch (error) {
            console.error('Помилка при створенні замовлення:', error.message);
          }
        };
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
  <Link to="/myprofile" className="menu-item" >
      Мій профіль
    </Link>
    <Link to="/orders" className="menu-item">
      Мої замовлення
    </Link>
    <Link to="/createdOrder" className="menu-item" style={{background:'lightgray'}}>
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
  <div className="order-container">
      <h2>Створити посилку</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title" style={{paddingRight:'20px'}}>Назва  </label>
          <input type="text" id="title" name="title" value={orderData.title} onChange={handleInputChange} required
           style={{paddingRight:'9%'}}/> 
        </div><br/>
        <div>
          <label htmlFor="description" style={{paddingRight:'20px'}}>Опис   </label>
          <textarea  id="description"  name="description" value={orderData.description} onChange={handleInputChange} required 
          style={{paddingRight:'10%', height:'50px'}}/>
        </div><br/>
        <div>
          <label htmlFor="price" style={{paddingRight:'22px'}}>Ціна </label>
          <input type="number" id="price" name="price" value={orderData.price} onChange={handleInputChange} required
          style={{paddingRight:'10%'}} />
        </div><br/>
        <div>
          <label htmlFor="adress" style={{paddingRight:'22px'}}>Номер відділення  </label>
          <input type="text" id="adress" name="adress" value={orderData.adress} onChange={handleInputChange} required
          style={{paddingRight:'10%'}}  /> 
        </div><br/>
        <button type="submit" className="button" style={{height:'35px'}}>Створити </button>
      </form>
    </div>

</div>
</div>
  );
}

export default CreateOrder;
