import React, {useContext, useEffect} from "react";

import { CartContext } from "../../context/CartItemsContext";

import './CheckoutPage.css';

const CheckoutPage: React.FC = () => {
    const {total, setTotal, setQuantity} = useContext(CartContext);
    let cartProducts = localStorage.getItem("items") || '[{}]'
    cartProducts = JSON.parse(cartProducts);

    useEffect(() => {
        if (Array.isArray(cartProducts)){
            setQuantity(cartProducts.length - 1)
            let fullPrice: number = 0
            for(let i = 0; i < cartProducts.length; i++){
                let product = cartProducts[i]
                if(product.unit_amount){
                    fullPrice += product.unit_amount
                }
            }
           setTotal(fullPrice)
        }
    }, [])

    return (
        <div>
            <h2>Summary</h2>
            {total > 0 && 
            <>
                <ul>
                    {Array.isArray(cartProducts) && cartProducts.map((item, index:number) => (
                    <li key={index}>{item.name} {item.unit_amount}</li>
                ))}
                </ul>
                <h3>{`Total Cost: $${total}`}</h3>
            </>
            }
            
            {total < 1 && 
                <p>No Items to show</p>
            }
        </div>
    )
}

export default CheckoutPage