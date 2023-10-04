import React, { useContext } from "react";
import { CartContext } from "../context/contex";

function Item({id, name, Cost,image, Instock, Contry}) {

    const [cart,setCart] = useContext(CartContext)

    function addToCart() {
        setCart((currentItems) => {
            const isItemFound = currentItems.find((item) => item.id === id)
            if(isItemFound){
                return currentItems.map((item) => {
                    if(item.id === id){
                        return{...item, quantity: item.quantity + 1}
                    }else{
                        item
                    }
                })
            }else{
                return[...currentItems, {id, quantity: 1, Cost}]
            }
        })
    }

    function removeItem(id) {
        setCart((currentItems) => {
            if(currentItems.find((item) => item.id === id)?.quantity === 1){
                return currentItems.filter((item ) => item.id !== id)
            }else{
                return currentItems.map((item) =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                } )
            }
        })
    }

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0
    }

    const quantityPerItem = getQuantityById(id)

    return(
        <>
            <div className="item-box">
                {
                    quantityPerItem > 0 && (
                        <div className="item-quantity">{quantityPerItem}</div>
                    )
                }
                <div>{name}</div>
                <img src={image} width='80' height='55'></img>
                <div className="item-price"> $ {Cost}</div>
                <button className="item-add-button" onClick={() => addToCart()}> + Add to cart</button>
            </div>
        </>
    )
}

export default Item