import React from "react";

function Item({id, name, Cost,image, Instock, Contry}) {

    function addToCart() {
        
    }

    return(
        <>
            <div className="item-box">
                <div>{name}</div>
                <img src={image} width='80' height='55'></img>
                <div className="item-price"> $ {Cost}</div>
                <button className="item-add-button" onClick={() => addToCart()}> + Add to cart</button>
            </div>
        </>
    )
}

export default Item