import React, { createContext, useState } from "react";

const CartContext = createContext(null)

function ShoppingCartProvider ({children}) {
    const [cart, setCart] = useState([])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

export {ShoppingCartProvider, CartContext}