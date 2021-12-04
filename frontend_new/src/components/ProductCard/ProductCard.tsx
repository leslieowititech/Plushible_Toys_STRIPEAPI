import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import QuantityDropDown from "./QuantityDropDown/QuantityDropDown";
interface ProductCardProps {
    maxItems: number;
    description: string;
    price: number
} 

const ProductCard: React.FC<ProductCardProps> = ({maxItems, description, price}) => {
    return (
        <div>
            <img src='#' alt=''/>
            <QuantityDropDown maxItems={maxItems}/>
            <div>{description}</div>
            <div>{price}</div>
            <AddShoppingCartIcon/>
        </div>
    )
}

export default ProductCard;