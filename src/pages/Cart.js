import React,{useState, useContext} from "react"
import Cartitems from "../components/Cartitems"
import {Context} from "../Context"

function Cart(){
    const {cartItems, clearCart} = useContext(Context)

    const [orderStatus, setOrderStatus] = useState("Place Order")

    const cost = 5.99 * cartItems.length;
    const totalCost = cost.toLocaleString("ja-JP", {style:"currency", currency:"JPY"})

    const cartItemElements = cartItems.map(item => (
        <Cartitems key={item.id} item={item} />
    ))
    

    const processOrder = ()=>{
        setOrderStatus("Ordering...")
        setTimeout(()=>{
            clearCart()
            console.log("Order placed!")
            setOrderStatus("Place Order")
        },3000)
    }

    const toggleBtn = cartItems.length > 0 && <button onClick={() => (processOrder())}>{orderStatus}</button>

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                {toggleBtn}
            </div>
        </main>
    )
}

export default Cart