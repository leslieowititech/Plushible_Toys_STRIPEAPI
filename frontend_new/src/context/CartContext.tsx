import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export interface CartState {
    cartItems: string[];
    itemCount: number,
    total: number
}
export const CartContext = createContext({} as CartState);


const initialState = {cartItems: [], itemCount: 0, total:0};

const CartContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const contextValues = {
        ...state
    }

    return (
        <CartContext.Provider value={contextValues }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;