import React from 'react';
import { useCart } from '../../Context/CartContext';
import CheckedoutPage from '../CheckedoutPage';
import SidebarCart from '../SidebarCart';

const Cart = () => {
  const [state, disptach] = useCart();

  const clickHandler = (type, payload) => disptach({type, payload});

  if (!state.itemsCounter) {
    return ( <div className='flex justify-center'><img src='../../images/cart.gif' alt='cart.gif' /></div> )
  }

  return (
    <div>
      <div>
        {
          state.selectedItems.map((product) => (
            <CheckedoutPage 
            key={product.id}
            data={product} 
            clickHandler={clickHandler}
            /> 
          ))
        }
      </div>
      <SidebarCart state={state} clickHandler={clickHandler}/>
    </div>
  );
};

export default Cart;