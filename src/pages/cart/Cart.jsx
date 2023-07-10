import React, {useContext} from 'react';
import { PRODUCTS } from '../../products';
import { Product } from '../shop/product';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from "react-router-dom";
import {CartItem} from "./CartItem"
import "./cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div><h1>Your cart item</h1></div>
      <div className='cartItem'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (<h1> Your Shopping Cart is Empty</h1>)}
    </div>

  )
}

