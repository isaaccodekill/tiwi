import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define cart context
const CartContext = createContext();

// Cart reducer to handle actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log(action.payload.id, action.payload.amount, "we deci")
            return { ...state, [action.payload.id]: (state[action.payload.id] || 0) + action.payload.amount };
        case 'REMOVE_ITEM':
            const updatedState = { ...state };
            delete updatedState[action.payload.id];
            return updatedState;
        case 'UPDATE_ITEM':
            return { ...state, [action.payload.id]: action.payload.amount };
        default:
            return state;
    }
};

// Cart provider to wrap your app or components
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, {});

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// useCart custom hook for accessing cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }

    const addItem = (id, amount) => context.dispatch({ type: 'ADD_ITEM', payload: { id, amount } });
    const removeItem = (id) => context.dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    const updateItem = (id, amount) => context.dispatch({ type: 'UPDATE_ITEM', payload: { id, amount } });

    return {
        cart: context?.cart,
        addItem,
        removeItem,
        updateItem,
    };
};