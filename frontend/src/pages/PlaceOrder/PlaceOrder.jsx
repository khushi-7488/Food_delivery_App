import React, { useContext } from "react";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </div>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="street" />
          <div className="multi-fields">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="zip code" />
            <input type="text" placeholder="country" />
          </div>
          <input type="text" placeholder="phone" />
        </div>
        <div className="place-order-right">
            <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>${getTotalCartAmount() === 0 ? 0 :  2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button >Proceed To Payment</button>
        </div>
        </div>
      </form>
    </div>
  );
};
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
export default PlaceOrder;
