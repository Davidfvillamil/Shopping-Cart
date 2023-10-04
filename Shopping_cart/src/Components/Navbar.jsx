import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/contex";

function Navbar() {

    const [cart,setCart] = useContext(CartContext)

    const quantity = cart.reduce((acumulador,current) => {
        return acumulador + current.quantity
    },0)

    return(
        <> 
            <nav>
                <Link to = {"/"} style={{color: 'white', textDecoration: 'none'}}>
                    <h2>Store</h2>
                </Link>

                <ul className="nav-list">
                    <Link to={"/cart"} style={{color: 'white', textDecoration: 'none'}}>
                        <li>
                            Cart items: <span className="cart-count">{quantity}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
