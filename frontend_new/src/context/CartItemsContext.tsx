import React, { createContext, useState } from "react";
import {ProductCardProps} from '../components/ProductsList/ProductCard/ProductCard';

interface CartProps {
    items: ProductCardProps[];
    quantity:  number;
    total: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    setItems: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext({} as CartProps);

export const CartContextProvider: React.FC = ({ children }) => {
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([{} as ProductCardProps]);
    const [total, setTotal] = useState(0);

    return (
        <CartContext.Provider value={{ quantity, setQuantity, items, setItems, total, setTotal }}>
            {children}
        </CartContext.Provider>
    )
}