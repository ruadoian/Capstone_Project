import React,{useContext} from "react"
import {Context} from "../Context"


const Cartitems = ({cartItem})=>{
    
    const {removeToCart} = useContext(Context)
    
    return(
        <div className="cart-item">
        <i className="ri-delete-bin-line" onClick={() =>removeToCart(cartItem.id)}></i>
        <img src={cartItem.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}

export default Cartitems