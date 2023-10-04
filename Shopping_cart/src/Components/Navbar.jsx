import React from "react";

function Navbar() {
    return(
        <>
            <nav>
                Store
                <ul className="nav-list">
                    <li>
                        Cart items: <span className="cart-count">0</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
