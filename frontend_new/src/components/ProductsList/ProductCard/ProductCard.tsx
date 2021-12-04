import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import QuantityDropDown from "./QuantityDropDown/QuantityDropDown";
export interface ProductCardProps {
    description: string;
    price: number;
    name: string
} 

const ProductCard: React.FC<ProductCardProps> = ({ description, price, name}) => {
    return (
        <div>
            <img src='#' alt=''/>
            <h2>{name}</h2>
            <QuantityDropDown/>
            <div>{description}</div>
            <div>{price}</div>
            <AddShoppingCartIcon/>
        </div>
    )
}

export default ProductCard;