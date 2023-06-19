import React from 'react';
import './CheckOutProduct.css'
import { useStateValue } from '../Context API/StateProvider';
import { useState } from 'react';

function CheckOutProduct ({ id, image, title, price, rating, hideButton }){
    const [{ basket }, dispatch] = useStateValue();

    {/*
     
    const [quantity, setQuantity] = useState(1);

    const addToBasket=()=>{
        dispatch({
          type: "ADD_TO_BASKET",
          item:{
            id : id,
            title : title,
            image : image,
            price : price,
            rating : rating,
          }
        })
    
      }

    
     

  
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };


    */}
    
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return(
        <div>
            <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
               {/* <div className="quantity-controls">
        <button onClick={removeFromBasket} className="quantity-decrease">-</button>
        <span className="quantity-value">{basket.length}</span>
        <button  onClick={addToBasket} className="quantity-increase">+</button>
      </div>*/}
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>

        </div>

    )
};

export default CheckOutProduct;