import { CartState } from "./CartContext";
interface Action {
    type: string,
    payload?: CartState
}

const CartReducer = (state:CartState, action:Action) => {
    switch(action.type){
        default:
            return state
    }
}

export default CartReducer;