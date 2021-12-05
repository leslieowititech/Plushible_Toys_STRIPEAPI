import React, { useContext } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductCard.css';

import QuantityDropDown from "./QuantityDropDown/QuantityDropDown";
import { CartContext } from "../../../context/CartItemsContext";
export interface ProductCardProps {
    description: string;
    unit_amount: number;
    name: string;
    images: string[];
} 

const ProductCard: React.FC<ProductCardProps> = ({ description, unit_amount, name, images}) => {
    const { quantity,items, setItems } = useContext(CartContext);

    const handleAddToCart = (e: React.FormEvent) => {
        console.log(quantity)
    }

    return (
        <div className='product-card-container'>
            <div className='product-card-image-container grid-row-span-2'>
                <img src={images[0]} alt={name} className='product-card-image '/>
            </div>
            <div className='product-card-details-container'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>$ {unit_amount}</p>
            </div>
            <div className='product-card-utility'>
                <QuantityDropDown/>
                <AddShoppingCartIcon onClick={handleAddToCart}/>
            </div>
        </div>
    )
}

export default ProductCard;