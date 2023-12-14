import React from 'react';
import './components/styles.css';
import Order from './components/Order';
import { Link, useNavigate } from 'react-router-dom'; 

function MyOrders(props) {
  const orders = props?.orders || [];

  const navigate = useNavigate();
  const handleCreateOrder = () => {
    navigate('/createdOrder');
  };
  
  return (
      <div>
        <div >
          <div className="row nav-logout" style={{ display: 'flex', flexDirection: 'row'} }>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
              <div className="row"  style={{ display: 'flex', flexDirection: 'row', width:'100%' } }>
                <div className="col" style={{ paddingTop:'15px', width:'50%', textAlign:'left', paddingLeft:'40px'}}>
                  <img src="star1.png" alt="star" width="270" height="75" />
                </div>
              
                <div className="col" style={{padding:'25px', width:'40%'}}>
                    <input class="form-control me-2" type="text" style={{borderRadius:'12px', height:'20px'}} placeholder="пошук посилки.."/>
                    <Link to="/" className="button" style={{height:'20px'}} >Вихід</Link>
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
              <Link to="/orders" className="menu-item" style={{background:'lightgray'}}>
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
            <div className="MyOrders">
                  { 
                      !orders.length ?
                      (
                        <div>
                          <h4>Замовлень ще немає ...</h4>
                           <Link to="/createdOrder">
                             <button onClick={handleCreateOrder}  className="button" style={{width:'200px', height:'40px', marginLeft:'-15%'}}>Створити замовлення</button>
                          </Link>
                          </div>
                      ) :(
                      orders.map((order) => <Order order={order}/>)
                  )}

            </div>
          </div>
        </div>
      </div>
  );
}

export default MyOrders;
