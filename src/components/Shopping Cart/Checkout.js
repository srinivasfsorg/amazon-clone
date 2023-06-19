import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../Context API/StateProvider";
import CheckOutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
  
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
            We Appreciate Your Business, <Link to="/">Shop again</Link>
  
            {basket.map(item => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
  
          </div>
        </div>
  
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
  }
  
  export default Checkout;