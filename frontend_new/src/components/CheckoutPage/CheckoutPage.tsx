import React, {useContext, useEffect, useState} from "react";

import { CartContext } from "../../context/CartItemsContext";

import './CheckoutPage.css';

const CheckoutPage: React.FC = () => {
    const { items, total } = useContext(CartContext);
    

    return (
        <div>
            {total > 0 && 
            <>
                <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} {item.unit_amount / 100}</li>
                ))}
                </ul>
                <h3>{`Total Cost: $${total}`}</h3>
            </>
            }
            <h2>Summary</h2>
            {total < 1 && 
                <p>No Items to show</p>
            }
        </div>
    )
}

export default CheckoutPage