import React, { createContext, useContext, useReducer } from 'react';
import { sumProducts } from '../helper/helper';

export const initialState  = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            if (!state.selectedItems.find((item) => item.id === action.payload.id)){
                state.selectedItems.push({ ...action.payload, quantity: 1 });
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkOut: false,
            };

        case "REMOVE_ITEM": 
            const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
                return {
                    ...state,
                    selectedItems: [...newSelectedItems],
                    ...sumProducts(newSelectedItems),
            };

        case "INCREMENT":
            const incrementIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
                state.selectedItems[incrementIndex].quantity++;
                return {
                    ...state,
                    ...sumProducts(state.selectedItems),
                };

        case "DECREMENT":
            const decrementIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
                state.selectedItems[decrementIndex].quantity--;
                return {
                    ...state,
                    ...sumProducts(state.selectedItems),
                };

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: true,
            }
            
        default:
            throw new Error ("invalid Action!");
    }
}

const CartContext = createContext();

function CartProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const {state, dispatch} = useContext(CartContext);
    return [state, dispatch]
}

export { useCart };
export default CartProvider;