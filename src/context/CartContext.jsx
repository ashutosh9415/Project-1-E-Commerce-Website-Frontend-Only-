import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
    switch (action.type) {
        case 'initialize':
            return action.payload;
        case 'add':
            if (state.items.some(item => item.id === action.payload.id)) {
                return state;
            }
            return { ...state, items: [...state.items, action.payload] };
        case 'remove':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        case 'toggleWishlist':
            if (state.wishlist.some(item => item.id === action.payload.id)) {
                return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id) };
            }
            return { ...state, wishlist: [...state.wishlist, action.payload] };
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [], wishlist: [] });

    useEffect(() => {
        const saved = localStorage.getItem('ecommerce-cart');
        if (saved) {
            dispatch({ type: 'initialize', payload: JSON.parse(saved) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ecommerce-cart', JSON.stringify(state));
    }, [state]);

    const total = useMemo(
        () => state.items.reduce((sum, item) => sum + item.price, 0),
        [state.items]
    );

    const value = {
        items: state.items,
        wishlist: state.wishlist,
        total,
        addToCart: product => dispatch({ type: 'add', payload: product }),
        removeFromCart: id => dispatch({ type: 'remove', payload: id }),
        toggleWishlist: product => dispatch({ type: 'toggleWishlist', payload: product })
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
}
