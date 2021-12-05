import React, { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartItemsContext";


const QuantityDropDown: React.FC = () => {
    const { quantity, setQuantity } = useContext(CartContext)
    
    return (
        <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
            <option value={1}> 1</option>
            <option value={2}> 2</option>
            <option value={3}> 3</option>
            <option value={4}> 4</option>
            <option value={5}> 5</option>
        </select>
    )
}

export default QuantityDropDown;