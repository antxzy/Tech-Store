import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"
import { Context } from "../../utils/context";


import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  const {cartItems, cartSubTotal} = useContext(Context)
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems?.length && <div className="empty-cart">
          <BsCartX />
          <span>You have no items in your cart.</span>
          <button className="return-cta" onClick={() => setShowCart(false)}>RETURN TO SHOP</button>
        </div>}

        {!!cartItems?.length && <>
            <CartItem />
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal: </span>
                    <span className="text total">${cartSubTotal}</span>
                </div>
                <div className="button">
                    <button className="checkout-cta">Checkout</button>
                </div>
            </div>
        </>}


      </div>
    </div>
  );
};

export default Cart;
