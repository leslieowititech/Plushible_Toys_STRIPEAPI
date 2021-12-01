import React from "react";

import { PlushibleProps } from "../App";

const CartIcon = ({quantity}: PlushibleProps) => {
    return (
        <div className='cart-icon-contaner'>
            <a href='/cart'>
                <img src={process.env.PUBLIC_URL + '/assets/cart_icon.svg'} alt='cart icon' className='cart-icon'/>
                <span>{quantity}</span>
            </a>
        </div>
    )
}

export default CartIcon;