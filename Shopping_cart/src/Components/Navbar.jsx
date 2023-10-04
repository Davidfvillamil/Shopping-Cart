import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav>
                <Link to = {"/"} style={{color: 'white', textDecoration: 'none'}}>
                    <h2>Store</h2>
                </Link>

                <ul className="nav-list">
                    <Link to={"/cart"} style={{color: 'white', textDecoration: 'none'}}>
                        <li>
                            Cart items: <span className="cart-count">0</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
